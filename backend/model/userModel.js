const mongoose = require("mongoose");
const bcypt = require("bcrypt");
const contacts = Object.freeze({
  FACEBOOK: "facebook",
  TWITTER: "twitter",
  INSTAGRAM: "instagram",
  YOUTUBE: "youtube",
});
const WRITER_PROFESSIONS = Object.freeze({
  JOURNALIST: "journalist",
  CONTENTWRITER: "content writer",
  BLOGGER: "blogger",
  FREELANCER: "freelancer",
  EDITOR: "editor",
  AUTHOR: "author",
  COPYWRITER: "copy writer",
  GHOSTWRITER: "ghost writer",
  TECHNICALWRITER: "technical writer",
  MARKETINGWRITER: "marketing writer",
  RESEARCHER: "researcher",
  ACADEMICWRITER: "academic writer",
  SCRIPTWRITER: "script writer",
  CREATIVEWRITER: "creative writer",
  POET: "poet",
  TRANSLATOR: "translator",
  PUBLICRELATIONSSPECIALIST: "public relations specialist",
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "email is alredy registerred"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [6, "Password length should be greater than 6"],
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
    },
    contactInfo: [
      {
        contactName: {
          type: String,
          enum: Object.values(contacts),
        },
        link: String,
        _id: false,
      },
    ],
    profession: {
      type: String,
      enum: Object.values(WRITER_PROFESSIONS),
      default: WRITER_PROFESSIONS.BLOGGER,
    },
    likedBlogs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcypt.genSalt(10);
    this.password = await bcypt.hash(this.password, salt);
  } catch (error) {
    console.log(error);
  }
});
const comparePassword = async () => {};
const User = mongoose.model("user", userSchema);
module.exports = User;
