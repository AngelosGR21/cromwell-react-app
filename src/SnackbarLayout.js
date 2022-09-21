import { Outlet } from "react-router-dom"
import CustomSnackbar from "./components/Snackbar/Snackbar"

const SnackbarLayout = () => {
  return (
    <>
    <CustomSnackbar/>
    <Outlet/>
    </>
  )
}

export default SnackbarLayout