import Host from '../models/host.js';

export const getHosts = async (req,res) => {
    try {
        const hosts = await Host.find();
        console.log({hosts});
        res.status(200).json(hosts);
    } catch (error) {
        res.status(404).json({message: error});
    }
  }
  