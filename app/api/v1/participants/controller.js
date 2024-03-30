const { StatusCodes } = require("http-status-codes");
const {
  signupParticipant,
  activateParticipant,
  signinParticipant,
  getAllEevents,
  getOneEvent,
  getAllOrders,
  checkoutOrder,
  getAllPaymentByOrganizer,
} = require("../../../services/mongoose/participants");

const signup = async (req, res, next) => {
  try {
    const result = await signupParticipant(req);
    console.log(result);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const activeParticipant = async (req, res, next) => {
  try {
    const result = await activateParticipant(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const result = await signinParticipant(req);

    res.status(StatusCodes.OK).json({
      data: { token: result },
    });
  } catch (err) {
    next(err);
  }
};

const getAllLandingPage = async (req, res, next) => {
  try {
    const result = await getAllEevents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getDetailLandingPage = async (req, res, next) => {
  try {
    const result = await getOneEvent(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getDashboard = async (req, res, next) => {
  try {
    const result = await getAllOrders(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const checkout = async (req, res, next) => {
  try {
    const result = await checkoutOrder(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPayment = async (req, res, next) => {
  try {
    const result = await getAllPaymentByOrganizer(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
  getAllPayment,
};
