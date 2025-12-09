import mongoose, { Schema, Model } from "mongoose";

export interface IDownload {
  modId: string;
  count: number;
  lastUpdated: Date;
}

const DownloadSchema = new Schema<IDownload>(
  {
    modId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation during hot reload
const Download: Model<IDownload> =
  mongoose.models.Download ||
  mongoose.model<IDownload>("Download", DownloadSchema);

export default Download;
