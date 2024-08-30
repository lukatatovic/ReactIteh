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

    const userId = req.userId;

    const trips = await Trip.find({
        $or: [{ createdBy: userId }, { participants: userId }],
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

    const totalFilteredTrips = await Trip.countDocuments({
        $or: [{ createdBy: userId }, { participants: userId }],
        ...(req.query.searchTerm && {
          $or: [
            { title: { $regex: req.query.searchTerm, $options: 'i' } },
            { destination: { $regex: req.query.searchTerm, $options: 'i' } },
          ],
        }),
      });

    res.status(200).json({
      success: true,
      trips,
      total: totalTrips,
      filtered: totalFilteredTrips,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTrip = async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trip.findById(id).populate('createdBy').exec();
    if (!trip) {
      res.status(404).json({
        success: false,
        message: 'Trip not found',
      });
    }

    return res.status(200).json({
      success: true,
      trip,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTrip = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTrip = await Trip.findByIdAndUpdate(id, req.body);
    if (!updatedTrip) {
      res.status(404).json({
        success: false,
        message: 'Trip not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Trip updated',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTrip = async (req, res) => {
  const { id } = req.params;

  try {
    await Trip.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: 'Trip deleted',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};