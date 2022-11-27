import { KategoriScreen } from "./KategoriScreen";

const PemerintahStackScreen = () => {
  return <KategoriScreen props={{name: 'PemerintahScreen', title: 'Layanan Administrasi Pemerintah', kategori: 1}}/>
}

const PublikStackScreen = () => {
  return <KategoriScreen props={{name: 'PublikScreen', title: 'Layanan Publik', kategori: 2}}/>
}

const OpdStackScreen = () => {
  return <KategoriScreen props={{name: 'OpdScreen', title: 'Organisasi Perangkat Daerah', kategori: 3}}/>
}

export {
  PemerintahStackScreen,
  PublikStackScreen,
  OpdStackScreen,
}