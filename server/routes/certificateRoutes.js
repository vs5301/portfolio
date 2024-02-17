const express = require("express")
const { createCertificateCtrl, getCertificatesCtrl, getCertificateCtrl, deleteCertificateCtrl, updateCertificateCtrl } = require("../controllers/certificateController")

const certificatesRoute = express.Router()

// POST /api/v1/certificates
certificatesRoute.post("/", createCertificateCtrl)

// GET /api/v1/certificates
certificatesRoute.get("/", getCertificatesCtrl)

// GET /api/v1/certificates/:id
certificatesRoute.get("/:id", getCertificateCtrl)

// DELETE /api/v1/certificates/:id
certificatesRoute.delete(":/id", deleteCertificateCtrl)

// UPDATE /api/v1/certificates/:id
certificatesRoute.put("/:id", updateCertificateCtrl)

module.exports = certificatesRoute