const express = require('express');
const router = express.Router();

import {
    request,
    alreadyFriends,
    isPending,
    accept,
    cancel
} from '../controllers/relation.controller';

router.post('/request', request);
router.post('/already-friends', alreadyFriends);
router.post('/is-pending', isPending);
router.post('/cancel', cancel);
router.post('/accept', accept);

module.exports = router;