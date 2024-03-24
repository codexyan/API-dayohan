// Import model categories
const Categories = require("../../api/v1/categories/model");

// Import custom error not found dan bad request
const { NotFoundError, BadRequestError } = require("../../errors");

// Menampilkan semua data kategori
const getAllCategories = async (req) => {
  const result = await Categories.find({ organizer: req.user.organizer });

  return result;
};

// Manambahkan data kategori
const createCategories = async (req) => {
  const { name } = req.body;

  // cari kategori dengan field name
  const check = await Categories.findOne({
    name,
    organizer: req.user.organizer,
  });

  // bila check bernilai true / data categori sudah ada maka kita akan tampilkan error bad request
  if (check) {
    throw new BadRequestError("Kategori nama sudah ada! (duplicated)");
  }
  const result = await Categories.create({
    name,
    organizer: req.user.organizer,
  });

  return result;
};

const getOneCategories = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`);

  return result;
};

const updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  // cari categories dengan field name dan id selain dari yang dikirim dari params
  const check = await Categories.findOne({
    name,
    _id: { $ne: id },
    organizer: req.user.organizer,
  });

  // jika check true / data categories sudah ada,
  // maka kita tampilkan error bad request
  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );

  // jika id result false/null,
  // maka akan menampilkan error 'Tidak ada kategori dengan id' yang dikirim client
  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`);

  return result;
};

const deleteCategories = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new NotFoundError(`Tidak ada kategori dengan id: ${id}`);

  await Categories.deleteOne({ _id: id });

  return result;
};

const checkingCategories = async (id) => {
  const result = await Categories.findOne({
    _id: id,
  });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
  checkingCategories,
};
