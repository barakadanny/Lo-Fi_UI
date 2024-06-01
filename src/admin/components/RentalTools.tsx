import { getCheckedOutRentals } from "../../api/rentalToolsData";

import CardTable from "../../HOC/CardTable";
import CardContainer from "../../shared/components/UIElements/CardContainer";

export default function RentalTools() {
  return (
    <CardContainer className="col-span-3">
      <CardTable
        headers={{
          name: "Rental Tools",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQ0lEQVR4nO2cX4gVVRzHP0aWm257r9m1ooQg2lVffBERCqOHTOutf/jSHwrd96BEEUHxRZ96kDV8b4WinrV/VkQqUeAGbcX2T2TRRMX1RvXgxA++g4dlZu/MvbO198zvA4N3z5w5h/PlnPP7M2cEx3Ecx3Ecx3EcpzyDwDbgKHAGuAj8A/wJnANOA28BLwDNLtqPlnuBMaANJAWvb4EBas4AsA+4LlFuAF8De4DHgGFgKbAM2KyZaPUmgBY15yHgbCDcMeDhnLom1ncu3k3WARckyE/AevJx8TJmXirex8By8nHxMva8s4F4i8nHxctgX7BsfeZ14apcl8EouufZv7W3tiljEsWsbR63VyzeQEwRRluzL89VMRYB0xJwQ499tuRsRxGxbJMo5iR34pjqjvbQX7gNPE8EHNVgLMLoxKjqjlcgXqLYue85o8FYeNaJEdWd1pLuVrw07DtFBPyhwcy1/2XtgyZmUWZb7836/TsR8LcGY0mBIoyr/o4S4k3ome/lMg0GM7HvaWswRd2KdB98p0vxjDtV9hcR8IsGc3/B+uk+2NZsHM1ZznM53cMqt7i77zlRwoikTGYkUacDQTd0cLof172viID9Gsyuks+NSKzxwLDMvvIilr26f4Q+pxXsUUX2tDKCzhXufaM+nyMS8SbmITFgsXMWwwobZ/RKIBrxtuiab95Vv28T2cy7Alyb5743avaZ+/IgkS3bLcDWeex7BfCz+j5AxHteE3gWuLXCvu31wCfq+wvgNiI2GIdU75kKZ96navPXfsxit0pa2zXAwYqSnRuDZfsbsJaauSpPA1eBp0o+NyxreyNYttHPvCzMqFwGntTz5mzvVtj3AHCHsjgjCs/2Bk5yokzPgdj3vLLtFblm5OdF56pU0Z69Pz6uLE5bs+yCsstjCs+iijDy+FJ70/8Z7i0oWiUHa+J9XmF7fc3dwbkWy/zes8DaW9C0fNn+N+IZvmwDfNl2EZBvVRr8JHDJrW0xbgFey3nv4Mu2A3cBnwWCHZeY6Qn5XonaVVkJ/KDBTQKPVNx+1OItlsVMlEtrVNx+1OIZbwRObCMoXwVMZeyFU7pXhOjFayiFlMxatqtyxCsjYvTiGa8EBiNLvFPAUHBvSGWdRKyFeMYHGuSrQdlUjnh5ItZWPONHDdRclZREV5Z4KUNBvdqKh7K5iQ4hpiQZwmSRVa9W4qHTAVUJOKi/L9VFPALnuYolPBL4krUhNSIWsvVqRLar7DA1InVj7ORor27MRyp/ghrR1EkpG/ijPTjSm1R+vuJzLn3BziCJ0OgilGsG7tDL1JAlwRdEJ0ueU2nqmfTDacsn1pL79CVPIstsS7ITm4KZNxnL15C9ing6WKofyrKu1pmUZfq9PTAY6aytjd9XZDm/GRiWuS5zmF/v8P8d1JYG8BLwvvKEM/pM336/B7yoT6gcx3Ecx3Ecx3EcquBf3vjqfXZzd+oAAAAASUVORK5CYII=",
        }}
        type="table"
        values={getCheckedOutRentals()}
      />
    </CardContainer>
  );
}
