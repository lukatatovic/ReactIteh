import { Trip } from '../models/Trip.model.js';

export const createTrip = async (req, res) => {
  const { title, destination, startDate, endDate, participants, image } =
    req.body;

  try {
    if (!title || !destination || !startDate || !endDate || !participants) {
      throw new Error('All fields are required');
    }

    const newTrip = new Trip({
      title,
      destination,
      startDate,
      endDate,
      createdBy: req.userId,
      participants,
      image,
    });
    await newTrip.save();

    res.status(201).json({
      success: true,
      message: 'Trip created successfully',
      trip: newTrip,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTrips = async (req, res) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit || 8);
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const trips = await Trip.find({
      ...(req.query.userId && { createdBy: req.query.userId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { destination: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit)
      .populate('createdBy')
      .exec();

    const totalTrips = await Trip.countDocuments();

    res.status(200).json({
      success: true,
      trips,
      totalTrips,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};