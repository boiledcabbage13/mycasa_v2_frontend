import adRepository from "./adRepository.js";
import userRepository from "./userRepository.js";
import technicianRepository from "./technicianRepository.js";
import productRepository from "./productRepository.js";
import serviceRepository from "./serviceRepository.js";
import partnerOperatorRepository from "./partnerOperatorRepository.js";

const repositories = {
    ads: adRepository,
    user: userRepository,
    technician: technicianRepository,
    product: productRepository,
    service: serviceRepository,
    'partner-operators': partnerOperatorRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}