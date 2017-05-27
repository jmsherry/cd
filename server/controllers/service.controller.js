import Service from './../models/service';

/**
 * Get all services
 * @param req
 * @param res
 * @returns void
 */
export function getServices(req, res) {
  Service.find().exec((err, services) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ services });
  });
}

/**
 * Save a service
 * @param req
 * @param res
 * @returns void
 */
// export function addService(req, res) {
//   if (!req.body.service.name || !req.body.service.title || !req.body.service.content) {
//     res.status(403).end();
//   }
//
//   const newService = new Service(req.body.service);
//
//   // Let's sanitize inputs
//   newService.title = sanitizeHtml(newService.title);
//   newService.name = sanitizeHtml(newService.name);
//   newService.content = sanitizeHtml(newService.content);
//
//   newService.slug = slug(newService.title.toLowerCase(), { lowercase: true });
//   newService.cuid = cuid();
//   newService.save((err, saved) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ service: saved });
//   });
// }

/**
 * Get a single service
 * @param req
 * @param res
 * @returns void
 */
export function getService(req, res) {
  Service.findOne({ cuid: req.params.id }).exec((err, service) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ service });
  });
}

/**
 * Delete a service
 * @param req
 * @param res
 * @returns void
 */
// export function deleteService(req, res) {
//   Service.findOne({ cuid: req.params.cuid }).exec((err, service) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//
//     service.remove(() => {
//       res.status(200).end();
//     });
//   });
// }
