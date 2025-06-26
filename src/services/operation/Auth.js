import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
const BASE_URL = "https://WebKraftry.vercel.app/api/v1"



// AUTH ENDPOINTS
export const mailpoint = {
  SENDMAIL_API : BASE_URL+ "/mail"
}



export function sendmail(email, fullName, message, phoneNo,service, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", mailpoint.SENDMAIL_API, {
        email, fullName, service,message, phoneNo
      })
      console.log("SENDMAIL API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Mail Sent Successfully")
      // navigate("/Completion")
    } catch (error) {
      console.log("SENDMAIL API ERROR............", error)
      toast.error("Could Not Send MAIL")
    }
  }
}