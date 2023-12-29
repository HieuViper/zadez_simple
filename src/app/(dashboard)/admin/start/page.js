import db from "@/models";
import axios from "axios";

const StartPage = () => {
  async function importData() {
    try {
      // Fetch data from the API
      const response = await axios.get(
        "https://provinces.open-api.vn/api/?depth=3"
      );
      const data = response.data;

      for (const cityData of data) {
        const city = await db.Cities.create({
          name: cityData.name,
          code: cityData.code,
          codename: cityData.codename,
          division_type: cityData.division_type,
          // Add other fields as needed
        });

        for (const districtData of cityData.districts) {
          const district = await db.Districts.create({
            name: districtData.name,
            code: districtData.code,
            codename: districtData.codename,
            division_type: districtData.division_type,
            cityId: city.id, // Associate the district with the city
          });

          for (const wardData of districtData.wards) {
            await db.Wards.create({
              name: wardData.name,
              code: wardData.code,
              codename: wardData.codename,
              division_type: wardData.division_type,
              districtId: district.id, // Associate the ward with the district
            });
          }
        }
      }

      console.log("Data imported successfully.");
    } catch (error) {
      console.error("Error importing data:", error.message);
    }
  }

  importData();

  return <div>StartPage</div>;
};

export default StartPage;
