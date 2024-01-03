("use strict");
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      product_code: {
        type: DataTypes.STRING(200),
        collate: "utf8mb4_unicode_520_ci",
        unique: true,
        allowNull: false,
        comment: "product code is used to build URL",
      },
      name: {
        type: DataTypes.STRING(300),
        collate: 'utf8mb4_unicode_520_ci',
        allowNull: true,
        defaultValue: 'undefined',
        comment: 'Title can be null',
      },
      short: {
        type: DataTypes.TEXT,
        collate: 'utf8mb4_unicode_520_ci',
        allowNull: true,
        comment: 'Description',
      },
      description: {
        type: DataTypes.TEXT,
        collate: 'utf8mb4_unicode_520_ci',
        allowNull: true,
        comment: 'Description',
      },
      main_image: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "feature image of the products",
      },
      list_image: {
        type: DataTypes.TEXT, //form: [{url: 'url', alt: 'alt', caption: 'caption'},{},{}]  Nhờ anh Cảnh coi lại chổ này
        allowNull: true,
        get() {
          // console.log('value of subImage:', this.getDataValue('subImage'));
          const listImage = this.getDataValue("list_image");

          // Check if the value is null or undefined
          if (listImage == null) {
            return [];
          }

          // Split and parse the JSON if the value is not null or undefined
          const result = listImage.split(";").map((item) => {
            return JSON.parse(item);
          });

          return result;
        },
        set(value) {
          if (value == null) {
            this.setDataValue("list_image", null);
            return;
          }
          const result = value.map((item) => {
            return JSON.stringify(item);
          });

          this.setDataValue("list_image", result.join(";"));
        },
      },

      sub_image: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "feature image of the products",
      },

      // list_image: {
      //     type: DataTypes.TEXT,  //form: [{url: 'url', alt: 'alt', caption: 'caption'},{},{}]  Nhờ anh Cảnh coi lại chổ này
      //     get: function () {
      //         const result = this.getDataValue("list_image").split(';').map((item) => {
      //             return JSON.parse(item);
      //         })
      //         return result;
      //     },
      //     set: function (value) {
      //         const result = value.map((item) => {
      //             return JSON.stringify(item);
      //         });

      //         return this.setDataValue("list_image", result.join(';'));
      //     },
      //     allowNull: true,
      //     comment: 'feature image of the products',
      // },
      categoryId: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allownNull: true,
      },
      price: {
        type: DataTypes.DOUBLE,
        comment: "Original price",
        allowNull: true,
      },
      discount_price: {
        type: DataTypes.DOUBLE,
        comment: "Original price",
        allowNull: true,
      },
      product_author: {
        type: DataTypes.STRING(200),
        collate: "utf8mb4_unicode_520_ci",
        comment: "It contains username that is used to login",
        allowNull: false,
        validate: {
          notNull: {
            msg: "You have to insert username of the post_author",
          },
        },
      },
      modified_by: {
        type: DataTypes.STRING(200),
        collate: "utf8mb4_unicode_520_ci",
        allowNull: true,
        comment:
          "This one is not the author, he is the one modified the products",
      },
      product_position: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "it has the value 1 that means the news is prioritied",
      },
      active: DataTypes.BOOLEAN,
      status: DataTypes.STRING(100),
      color: DataTypes.STRING(100),
      driver: DataTypes.STRING,
      type: DataTypes.STRING,
      stock: DataTypes.STRING,
    },
    { tableName: "products" }
  );
  Products.associate = function (db) {
    // associations can be defined here
  };
  return Products;
};
