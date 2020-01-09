const app = require("./src");
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
