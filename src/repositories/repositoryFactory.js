import adRepository from "./adRepository.js";
import userRepository from "./userRepository.js";
import technicianRepository from "./technicianRepository.js";
import productRepository from "./productRepository.js";
import serviceRepository from "./serviceRepository.js";

const repositories = {
    ads: adRepository,
    user: userRepository,
    technician: technicianRepository,
    product: productRepository,
    service: serviceRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}