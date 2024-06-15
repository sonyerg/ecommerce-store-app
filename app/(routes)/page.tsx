import getBillboard from "@/actions/get-billboards";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

export default async function HomePage() {
  const billboards = await getBillboard("3dad7651-409c-4139-86fc-3e9629c5a371");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
    </Container>
  );
}
