// Homepage (/route)
import HelloComponent from "./HelloComponent";
import UploadContractPage from "@/components/ui/upload";

export default function Home() {
  return (
    <div>
      <HelloComponent/>
      <UploadContractPage />
    </div>
  );
}
