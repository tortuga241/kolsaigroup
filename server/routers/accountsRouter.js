import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

dotenv.config(); 

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser())


console.log(`\x1b[34m |!|   ACCOUNT ROUTER ROUTER READY  |!|\x1b[0m`);


router.post('/login', async (req, res) => {
  try {
    const { nickname, password } = req.body;

    const adminNick = process.env.ADMIN_NICK_NAME;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;

    if (nickname !== adminNick) {
      return res.status(404).json({ success: false, message: 'Пользователь не найден' });
    }

    const passwordMatch = await bcrypt.compare(password, passwordHash);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Неверный логин или пароль' });
    }

    // Вход успешен
    res.status(200).json({  success: true, message: 'Успешный вход', admin: { nickname: adminNick} });

  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ success: false, message: 'ошибка сервера' });
  }
});

export default router;
