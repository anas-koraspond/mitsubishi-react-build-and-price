export const models = [
  {
    key: 9,
    name: "Eclipse Cross",
    price: 34475,
    variants: [
      {
        key: 234,
        name: "Eclipse Cross EC45",
        price: 39998,
        value: 234,
        options: [
          {
            name: "standard",
            value: "standard",
            price: 0
          },
          {
            name: "Mid Option",
            value: "mid_option",
            price: 250
          },
          {
            name: "full Option",
            value: "full_option",
            price: 500
          }
        ],
        exteriorColors: [
          {
            name: "pearl orange",
            value: "pearl_orange",
            code: "#f83c00",
            color: "white",
            price: 40
          },
          {
            name: "pearl red",
            value: "pearl_red",
            code: "#ff0000",
            price: 80
          }
        ],
        interior: [
          {
            name: "leathered smooth",
            value: "leathered_smooth",
            price: 1200
          },
          {
            name: "coffy",
            value: "coffy",
            price: 1900
          }
        ]
      },
      {
        key: 235,
        name: "Eclipse Cross sports Edition",
        value: 235,
        price: 49998,
        options: [
          {
            name: "standard",
            value: "standard",
            price: 0
          },
          {
            name: "Mid Option",
            value: "mid_option",
            price: 650
          },
          {
            name: "full Option",
            value: "full_option",
            price: 900
          }
        ],
        exteriorColors: [
          {
            name: "pearl orange",
            value: "pearl_orange",
            code: "#f83c00",
            price: 80
          },
          {
            name: "pearl red",
            value: "pearl_red",
            code: "#ff0000",
            price: 120
          }
        ],
        interior: [
          {
            name: "leathered smooth",
            value: "leathered_smooth",
            price: 5200
          },
          {
            name: "coffy",
            value: "coffy",
            price: 5900
          }
        ]
      }
    ]
  }
];
export const initialConfig = {
  9: [
    {
      model: 9,
      variant: 234,
      color: "pearl_orange",
      interior: "leathered_smooth",
      option: "standard"
    },
    {
      model: 9,
      variant: 235,
      color: "pearl_red",
      interior: "leathered_smooth",
      option: "full_option"
    }
  ]
};
