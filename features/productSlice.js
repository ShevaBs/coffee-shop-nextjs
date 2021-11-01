import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {id: 1, name: "Solimo Coffee Beans", img: '/images/bestItem1.png' ,weight: 2, country: "Brazil", price: 10.73, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    {id: 2, name: "Presto Coffee Beans", img: '/images/bestItem2.png', weight: 1, country: "Kenya", price: 15.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    {id: 3, name: "AROMISTICO Coffee", img: '/images/bestItem3.png', weight: 1 , country: "Columbia", price: 6.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    {id: 4, name: " Lavazza Tierra Brazil,", img: '/images/LavazzaBrazil.jpg' ,weight: 1, country: "Brazil", price: 17.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    {id: 5, name: "Kenya AA Coffee", img: '/images/KenyaCoffee.png', weight: 1, country: "Kenya", price: 23.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    {id: 6, name: "Columbus House Blend – Espresso Grind", img: '/images/ColumbusCoffee.jpg', weight: 1 , country: "Columbia", price: 44.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
  ],
  
  bestProducts: [
    {id: 1, name: "Solimo Coffee Beans", img: '/images/bestItem1.png' ,weight: 2, country: "Brazil", price: 10.73, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    {id: 2, name: "Presto Coffee Beans", img: '/images/bestItem2.png', weight: 1, country: "Kenya", price: 15.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
    {id: 3, name: "AROMISTICO Coffee", img: '/images/bestItem3.png', weight: 1 , country: "Columbia", price: 6.99, description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  },
  ]
}

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
  
  }
});

// export const {} = productSlice.actions
export default productSlice.reducer