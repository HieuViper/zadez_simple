import db from "@/models";
import axios from "axios";
import bcrypt from "bcrypt";

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

    try {
      const roles = [
        {
          code: "admin",
          name: "Admin",
        },
        {
          code: "system",
          name: "System",
        },
        {
          code: "sa",
          name: "Sale Admin",
        },
        {
          code: "customer",
          name: "Customer",
        },
      ];

      const hashedPassword = await bcrypt.hash("admin", 10);
      const adminUser = {
        fullName: "Admin",
        email: "admin@gmail.com",
        phoneNumber: "0909999999",
        password: hashedPassword,
        rolesId: [1, 2, 3],
      };
      for (let index = 0; index < roles.length; index++) {
        await db.Roles.create(roles[index]);
      }
      await db.Users.create(adminUser);

      const userRoles = {
        userId: 1,
        roleId: 1,
      };
      await db.UserRoles.create(userRoles);
    } catch (error) {
      console.error("Error importing data:", error.message);
    }
  }

  importData();

  return <div>Init DB</div>;
};

export default StartPage;
