/*eslint eqeqeq: "off"*/
import Swal from "sweetalert2";
import AlertSuccessIcon from "../../assets/svg/alertSuccess.svg";
import AlertErrorIcon from "../../assets/svg/alertError.svg";

export default function AlertPopup(props) {
  const { type } = props;
  return Swal.fire({
    title: type == "success" ? "Congratulations!" : "Cancel!",
    text:
      type == "success" ? "Your data is Saved Successfully" : "Are You Sure?",
    confirmButtonText: "Confirm",
    allowEscapeKey: false,
    allowOutsideClick: false,
    imageUrl: type == "success" ? AlertSuccessIcon : AlertErrorIcon,
    imageHeight: 128,
    imageWidth: 128,
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
}
