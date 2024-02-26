import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllWeapons } from '../store/mhwWeaponSlices/mhwWeaponsSlices';

export default  function useMhwStore(url){
   const dispatch = useDispatch();
   useEffect(() => {
       dispatch(getAllWeapons(url));
   }, [dispatch, url]);
   return;
}