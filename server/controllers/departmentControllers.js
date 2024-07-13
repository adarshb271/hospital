const Department = require('../db/models/department-schema');
// const Department = require('../db/models/department-schema');

module.exports.getDepartments = async (req, res) => {
  const departments = await Department.find();

  res.status(200).json(departments);
};
module.exports.postDepartment = async (req, res) => {
  const department = await Department.create({
    name: req.body.name,
    image: `http://localhost:${process.env.PORT}/upload/${req.file.filename}`,
  });
  res.status(200).json({ message: 'department added', data: department });
};
