import product1 from '../Images/package1-1-600x600.jpg';
import product2 from '../Images/package2-1-600x600.jpg';
import product3 from '../Images/package3-1-600x600.jpg';
import product4 from '../Images/package4-1-600x600.jpg';
import product5 from '../Images/package5-1-600x600.jpg';
import product6 from '../Images/package6-1-600x600.jpg';
import product7 from '../Images/package7-1-600x600.jpg';
import product8 from '../Images/package8-1-600x600.jpg';

const shopPackages = [
    {
        id: 1,
        name: "Basic Starter Kit",
        rating: 4.2,
        price: 50,
        discount: 0,
        image: product1,
        images: [product1, product2, product3, product4],
        brand: "Starter Co.",
        sku: "SKU_101",
        stock: 100,
        category: "Tech Accessories",
        description: "The Basic Starter Kit is a perfect introduction to the world of tech accessories. Whether you're looking to enhance your daily tech experience or need essential components to begin your journey, this kit has everything you need. It includes a set of high-quality cables, a durable portable charger, and a set of premium earbuds. All components are designed for maximum performance and reliability, ensuring you get the most out of your devices. Ideal for beginners or anyone looking to streamline their tech setup."
    },
    {
        id: 2,
        name: "Premium Tech Bundle",
        rating: 4.8,
        price: 120,
        discount: 15,
        image: product2,
        images: [product2, product1, product3, product4],
        brand: "TechPro",
        sku: "SKU_102",
        stock: 75,
        category: "Gadgets",
        description: "The Premium Tech Bundle offers a curated selection of the finest gadgets for tech enthusiasts. Whether you're upgrading your home office, gaming setup, or daily essentials, this bundle delivers a comprehensive solution. With cutting-edge components, including a high-speed wireless mouse, an ergonomic keyboard, a portable speaker, and advanced charging accessories, this bundle enhances your productivity and leisure time. Enjoy the combination of sleek design, reliability, and performance that TechPro is known for. A must-have for tech lovers."
    },
    {
        id: 3,
        name: "Gaming Essentials Pack",
        rating: 4.5,
        price: 200,
        discount: 20,
        image: product3,
        images: [product3, product1, product2, product4],
        brand: "GameGear",
        sku: "SKU_103",
        stock: 50,
        category: "Gaming",
        description: "Step up your gaming experience with the Gaming Essentials Pack. Designed for avid gamers, this bundle includes top-tier peripherals such as a high-precision gaming mouse, mechanical keyboard, noise-canceling headphones, and a high-resolution mouse pad. Each item is engineered for precision, speed, and comfort, allowing you to immerse yourself fully in your favorite games. Whether you're playing competitive esports or just enjoying casual gaming, this pack ensures that you have the best gear to elevate your performance and enjoyment."
    },
    {
        id: 4,
        name: "Home Office Setup",
        rating: 4.7,
        price: 350,
        discount: 30,
        image: product4,
        images: [product4, product1, product2, product3],
        brand: "OfficePro",
        sku: "SKU_104",
        stock: 30,
        category: "Office Equipment",
        description: "Maximize your productivity with the Home Office Setup from OfficePro. This all-in-one package includes a stylish and ergonomic desk, a comfortable office chair, a high-definition monitor, a wireless keyboard and mouse, and a desk organizer for all your essentials. Designed for those working remotely or creating a dedicated workspace at home, this setup provides a professional environment that combines style, functionality, and comfort. Set yourself up for success with the tools you need to focus, collaborate, and achieve your goals from the comfort of your home."
    },
    {
        id: 5,
        name: "Photography Pro Kit",
        rating: 4.3,
        price: 180,
        discount: 10,
        image: product5,
        images: [product5, product1, product2, product3],
        brand: "PhotoMaster",
        sku: "SKU_105",
        stock: 40,
        category: "Photography",
        description: "Capture stunning images with the Photography Pro Kit from PhotoMaster. This professional-grade bundle is designed for photographers of all levels, providing you with all the essential tools needed for high-quality photography. Included in the kit are a DSLR camera, a versatile lens, a tripod, a set of memory cards, and a stylish camera bag. The kit is perfect for capturing everything from portraits to landscapes, with top-tier equipment that offers excellent performance in both daylight and low-light conditions. Start your photography journey today with the PhotoMaster Pro Kit!"
    },
    {
        id: 6,
        name: "Fitness Gear Combo",
        rating: 4.6,
        price: 90,
        discount: 5,
        image: product6,
        images: [product6, product1, product2, product3],
        brand: "FitLife",
        sku: "SKU_106",
        stock: 90,
        category: "Fitness",
        description: "Stay active and healthy with the Fitness Gear Combo from FitLife. This comprehensive bundle includes everything you need to kickstart your fitness journey, from resistance bands and dumbbells to a jump rope and a yoga mat. Each piece of equipment is designed to help you get the most out of your workouts, whether you're at home or at the gym. The kit is ideal for building strength, increasing flexibility, and improving cardiovascular health. Whether you're a fitness beginner or looking to enhance your current routine, the FitLife Fitness Gear Combo is a great addition to any workout plan."
    },
    {
        id: 7,
        name: "Smart Home Package",
        rating: 4.9,
        price: 400,
        discount: 50,
        image: product7,
        images: [product7, product1, product2, product3],
        brand: "SmartLiving",
        sku: "SKU_107",
        stock: 20,
        category: "Smart Home",
        description: "Transform your home into a connected, efficient, and intelligent living space with the Smart Home Package from SmartLiving. This comprehensive kit includes smart lighting, a smart thermostat, voice-controlled assistant devices, and security cameras, all designed to enhance your lifestyle. Whether you're controlling the lighting, adjusting the temperature, or monitoring your home remotely, this package offers ultimate convenience and peace of mind. Designed for easy installation and seamless integration, it brings futuristic technology into your everyday life for an enhanced living experience."
    },
    {
        id: 8,
        name: "Music Lover's Bundle",
        rating: 4.4,
        price: 150,
        discount: 15,
        image: product8,
        images: [product8, product1, product2, product3],
        brand: "AudioPro",
        sku: "SKU_108",
        stock: 60,
        category: "Music",
        description: "The Music Lover's Bundle from AudioPro is the ultimate collection for anyone who loves to listen to music with the highest quality sound. This bundle includes premium headphones, a portable Bluetooth speaker, a high-quality record player, and a set of vinyl records. Each product is designed to provide exceptional sound clarity, deep bass, and immersive audio quality. Whether you're enjoying your favorite music at home or on the go, this bundle ensures that you experience audio like never before. Perfect for audiophiles, music enthusiasts, and anyone who appreciates top-tier sound equipment."
    }
];

export default shopPackages;
