import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// 左車両の混雑度APIエンドポイント
app.get("/api/congestion/left", (req, res) => {
  const congestionRate = Math.floor(Math.random() * 100);

  res.json({
    congestionRate,
    isCrowded: congestionRate > 70,
  });
});

// 右車両の混雑度APIエンドポイント
app.get("/api/congestion/right", (req, res) => {
  const congestionRate = 80;

  res.json({
    congestionRate,
    isCrowded: congestionRate > 70,
  });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
