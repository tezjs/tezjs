const express = require('express');
const router = express.Router();

class AuthenticationController {

    static async getUser(request, response) {
        response.json({ user: "Ajay" });
    }
}
router.get('/user', AuthenticationController.getUser);
module.exports = router;