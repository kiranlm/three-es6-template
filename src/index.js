import Home from './Home';
import Box from './Box';

let app = new Home();
app.add(
  new Box({
    width: 10,
    height: 10,
    depth: 10,
    color: 0x8844aa,
  }),
);
