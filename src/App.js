import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="App">
    var json = [
{
    title: 'hello world',
    body: 'bla bla bla',
    publish_date: '2014-04-12'
},
{
    title: 'hello world',
    body: 'bla bla bla',
    publish_date: '2014-04-30'
},   
{
    title: 'hello world 2',
    body: 'bla bla bla',
    publish_date: '2015-02-30'
},
{
    title: 'hello world 2',
    body: 'bla bla bla',
    publish_date: '2015-02-17'
},
{
    title: 'hello world 2',
    body: 'bla bla bla',
    publish_date: '2015-05-30'
}
];

var newJson = {};

json.forEach(function (item) {
    var date = new Date(item.publish_date),
        year = date.getUTCFullYear(),
        month = date.getUTCMonth() + 1;

    newJson[year] = newJson[year] || {};
    newJson[year][month] = newJson[year][month] || [];
    newJson[year][month].push(item);
});

console.log(newJson);
  </div>;
}

export default App;
