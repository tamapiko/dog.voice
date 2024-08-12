const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/translate', (req, res) => {
    const text = req.body.text;
    // ここで犬語に変換するロジックを追加
    const translation = translateToDogLanguage(text);
    res.json({ translation: translation });
});

function translateToDogLanguage(text) {
    // 簡易な変換ロジック（実際にはAIを使用）
    if (text.includes('遊ぶ')) return 'ワンワン！';
    if (text.includes('食べる')) return 'ウゥー！';
    return 'ハッピー！';
}

app.listen(port, () => {
    console.log(`犬語翻訳機サーバーが起動しました。ポート: ${port}`);
});
