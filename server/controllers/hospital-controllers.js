const Hospital = require('../db/models/hospital-schema');

module.exports.getHospital = async (req, res) => {
  const hospital = await Hospital.find();
  res.status(200).json(hospital);
};
module.exports.postHospital = async (req, res) => {
  const response = await Hospital.create({
    name: req.body.name,
  });
  res.status(200).json({ message: 'hospital added', data: response });
};
