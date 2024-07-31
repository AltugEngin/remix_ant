export const meta = () => {
  return [
    { title: "KEAS Portal" },
    { name: "Kastamonu Entegre Bakım Birimleri Uygulaması", content: "Portal'a Hoşgeldiniz!" },
  ];
};

export default function Index() {
  return (<div>
    <h1 className="text-hayat_mavi font-bold text-3xl">Hoşgeldiniz !</h1>
    <p className="text-hayat_yesil">Lütfen Menuden seçim yapınız</p>
  </div>)
}
