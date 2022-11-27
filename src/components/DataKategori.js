import {ListWebsite} from './index';

function DataPemerintah({navigation}) {
  return <ListWebsite props={{kategori: '1', navigation}} />;
}

function DataPublik({navigation}) {
  return <ListWebsite props={{kategori: '2', navigation}} />;
}

function DataOpd({navigation}) {
  return <ListWebsite props={{kategori: '3', navigation}} />;
}

export {
  DataPemerintah,
  DataPublik,
  DataOpd
}