const express = require('express');
const router = express.Router();

class AuthorizationController {

    static async get(request, response) {
        response.json({ user: "Authorization" });
    }
}
router.get('/', AuthorizationController.get);
module.exports = router;