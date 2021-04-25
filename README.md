# js-parsing-date

Ini adalah package nodejs sederhana untuk menghitung selisih dan detail antara dua tanggal.

### Contoh penggunaan

```javascript
const jsDate = require("./js-date");

const jsDateObj = new jsDate(
    "2021/04/01","2021/04/10"
)

console.log(jsDateObj.difference().toMilliSeconds() + " milliseconds");
console.log(jsDateObj.difference().toSeconds() + " seconds");
console.log(jsDateObj.difference().toMinutes() + " minutes");
console.log(jsDateObj.difference().toHours() + " hours");
console.log(jsDateObj.difference().toDays() + " days");
console.log(jsDateObj.parsingDate());
```
#### Hasil
```text
777600000 milliseconds
777600 seconds
12960 minutes
216 hours
9 days
[ '2021/04/01',
  '2021/04/02',
  '2021/04/03',
  '2021/04/04',
  '2021/04/05',
  '2021/04/06',
  '2021/04/07',
  '2021/04/08',
  '2021/04/09',
  '2021/04/10' ]
```
