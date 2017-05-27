import { Router } from 'express';
import * as ServiceController from '../controllers/service.controller';

const router = new Router();

// Get all Services
router.route('/services').get(ServiceController.getServices);

// Get one service by cuid
router.route('/services/:id').get(ServiceController.getService);

// Add a new Service
// router.route('/services').service(ServiceController.addService);

// Delete a service by cuid
// router.route('/services/:cuid').delete(ServiceController.deleteService);

export default router;
