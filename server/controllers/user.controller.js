import { User } from "../models/user.modal.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, userName, password } = req.body;

  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  await User.create({
    email,
    fullName,
    password,
    userName,
  });

  return res
    .status(201) // Corrected status code to 201
    .json(new ApiResponse(201, "User registered successfully")); // Corrected status code to 201
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName) {
    throw new ApiError(400, "Username is required");
  }
  const user = await User.findOne({ userName });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials or password");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "User logged in successfully"));
});

export { registerUser, loginUser };
