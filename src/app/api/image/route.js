import { promises as fsPromises } from "fs";
import fs, { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

// Function to check if a folder exists
const doesFolderExist = async (folderPath) => {
  try {
    // Use 'access' method to check if the folder exists
    await fsPromises.access(folderPath);

    // If 'access' is successful, the folder exists
    return true;
  } catch (error) {
    // If 'access' throws an error, the folder does not exist
    return false;
  }
};

// Function to convert from isostring to custom name like 'jan2023'
function convertISOToCustomFormat(isoString) {
  // Parse the ISO string and create a Date object
  const date = new Date(isoString);

  // Get the month and year from the Date object
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  // Combine the month and year in the desired format
  const result = month.toLowerCase() + year;

  return result;
}

export async function POST(req, res) {
  const formData = await req.formData();
  const file = formData.get("file");
  let lastModifiedDate = new Date(file.lastModified); //get modified date
  let nameFolderInCustom = convertISOToCustomFormat(
    //get name folder in format like 'jan2023'
    lastModifiedDate.toISOString()
  );

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  } else {
    const buffer = Buffer.from(await file.arrayBuffer());
    let filename = file.name.replaceAll(" ", "_");

    try {
      await doesFolderExist(`src/uploads/${nameFolderInCustom}`).then(
        async (exists) => {
          if (exists) {
          } else {
            await fsPromises.mkdir(`src/uploads/${nameFolderInCustom}`);
          }
        }
      );

      // Check if the filename is already present in the folder
      const files = await fs.readdir(`src/uploads/${nameFolderInCustom}`);
      const isDuplicate = files.includes(filename);

      // if duplicate then change filename to unique
      if (isDuplicate == true) {
        const temp = filename.split(".");
        filename = temp[0] + "-" + Date.now().toString() + "." + temp[1];
      }
      // console.log("filenaem", filename);

      await writeFile(
        path.join(
          process.cwd(),
          `src/uploads/${nameFolderInCustom}/` + filename
        ),
        buffer
      );
      return NextResponse.json({
        message: "success",
        status: 201,
        url: `/api/image?path=/src/uploads/${nameFolderInCustom}/` + filename,
      });
    } catch (error) {
      // console.log("Error occured ", error);
      return NextResponse.json({ Message: "Failed", status: 500 });
    }
  }
}

export async function GET(req, res) {
  const url = new URL(req.url);
  const filePath = url.searchParams.get("path");
  if (!filePath) {
    return new NextResponse("Path file not found", { status: 404 });
  }
  const ext = filePath.split(".").pop();
  try {
    const imagePath = path.join(process.cwd(), filePath);
    const image = await fs.readFile(imagePath);
    let type = "";
    if (ext == "jpg" || ext == "jpeg") {
      type = "image/jpeg";
    } else if (ext == "png") {
      type = "image/png";
    } else {
      type = "image/webp";
    }

    return new NextResponse(image, {
      status: 200,
      headers: { "Content-type": type },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("File not found", { status: 404 });
  }
}
