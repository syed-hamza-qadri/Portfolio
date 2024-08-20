import './App.css'
import ProductCard from './Components/Product Card';

function App() {

  return (

    <section className="text-gray-600 body-font container px-5 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font my-8 text-gray-900">PRODUCT CARDS USING REACT</h1>
      <div className="flex flex-wrap m-4">
        <ProductCard title="EcoFlex T-Shirt" category="Clothing" description="A breathable, eco - friendly t - shirt made from recycled materials." src="./src/assets/EcoFlex T-Shirt.jpg" />
        <ProductCard title="UrbanStride Sneakers" category="Footwear" description="Stylish, lightweight sneakers designed for all - day comfort and urban exploration." src="./src/assets/UrbanStride Sneakers.jpg" />
        <ProductCard title="ChillWave Hoodie" category="Clothing" description="A cozy, oversized hoodie with a minimalist design and soft fleece lining." src="./src/assets/ChillWave Hoodie.jpg" />
        <ProductCard title="ClassicFit Jeans" category="Clothing" description="Timeless straight - leg jeans with a comfortable fit and durable denim." src="./src/assets/ClassicFit Jeans.jpg" />
        <ProductCard title="BlissStep Sandals" category="Footwear" description="Lightweight sandals with cushioned soles, perfect for summer strolls." src="./src/assets/BlissStep Sandals.jpg" />
        <ProductCard title="LuxeLoom Scarf" category="Accessories" description="A soft, cashmere - blend scarf that adds a touch of elegance to any outfit." src="./src/assets/LuxeLoom Scarf.jpg" />
        <ProductCard title="AthleisurePro Leggings" category="Clothing" description="High - performance leggings with moisture - wicking fabric, ideal for workouts or casual wear." src="./src/assets/AthleisurePro Leggings.jpg" />
        <ProductCard title="RetroVibe Jacket" category="Clothing" description="A vintage - inspired bomber jacket with a modern fit and bold colors." src="./src/assets/RetroVibe Jacket.jpg" />
        <ProductCard title="BreezeWalk Loafers" category="Footwear" description="Versatile loafers with breathable fabric and a cushioned insole for all - day wear." src="./src/assets/BreezeWalk Loafers.jpg" />
        <ProductCard title="SilkDream Pajama Set" category="Clothing" description="A luxurious silk pajama set that feels soft against the skin, perfect for a restful night's sleep." src="./src/assets/SilkDream Pajama Set.jpeg" />
        <ProductCard title="CommuterPack Backpack" category="Accessories" description="A sleek and durable backpack with multiple compartments for easy organization on the go." src="./src/assets/CommuterPack Backpack.jpg" />
        <ProductCard title="BoldFrame Sunglasses" category="Accessories" description="Trendy sunglasses with polarized lenses for clear vision and UV protection." src="./src/assets/BoldFrame Sunglasses.jpg" />
        <ProductCard title="ActiveFlow Tank Top" category="Clothing" description="A lightweight, breathable tank top designed for maximum movement during workouts." src="./src/assets/ActiveFlow Tank Top.jpeg" />
        <ProductCard title="CozyKnits Beanie" category="Accessories" description="A warm, knitted beanie that combines style and comfort for chilly days." src="./src/assets/CozyKnits Beanie.jpg" />
        <ProductCard title="StrideFlex Running Shoes" category="Footwear" description="High - performance running shoes with responsive cushioning and a supportive fit." src="./src/assets/StrideFlex Running Shoes.jpg" />
        <ProductCard title="TerraStep Hiking Boots" category="Footwear" description="Rugged and durable hiking boots with waterproof materials and superior grip for any terrain." src="./src/assets/TerraStep Hiking Boots.jpeg" />
      </div>
    </section>

  )
}

export default App;


















