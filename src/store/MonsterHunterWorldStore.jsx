import { configureStore } from '@reduxjs/toolkit'
import weaponsReducer from './mhwWeaponSlices/mhwWeaponsSlices'

 const monsterHunterWorldStore = configureStore({
 reducer: {
   getAllWeapons: weaponsReducer
 },
})

export default monsterHunterWorldStore;

// step 1) was npm i redux toolkit
// step 2) create store folder and specific store file
// step 3) import store to index.js file where app is a component
//  step 4) wrap project (where needed) with store provider (in this case all monster hunter routese)
// step 5)