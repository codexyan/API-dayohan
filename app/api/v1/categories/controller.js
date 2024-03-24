const { StatusCodes } = require("http-status-codes");

const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../services/mongoose/categories");

// ###################################################

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);

    res.status(StatusCodes.OK).json({
      message: "Get all categories success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const findbasedId = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req)

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    // cari & hapus categories berdasarkan field _id
    const result = await deleteCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  create,
  findbasedId,
  update,
  destroy,
};
