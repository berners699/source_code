import React, { useState } from 'react'
import GoldBean from './GoldBean'
import { ShoppingBag, Gift, X } from 'lucide-react'

const products = [
  {
    id: 1,
    name: '1千万金豆卡',
    value: '￥100',
    price: 10000000,
    image: '/assets/aigc/images/card-gold-bean.png',
    category: '金豆',
  },
  {
    id: 2,
    name: '100元京东卡',
    value: '￥100',
    price: 10000000,
    image: '/assets/aigc/images/card-jd.png',
    category: '电商',
  },
  {
    id: 3,
    name: '100元沃尔玛卡',
    value: '￥100',
    price: 10000000,
    image: '/assets/aigc/images/card-walmart.png',
    category: '商超',
  },
  {
    id: 4,
    name: '100元中石化卡',
    value: '￥100',
    price: 10000000,
    image: '/assets/aigc/images/card-sinopec.png',
    category: '加油',
  },
]

const Mall = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [userPoints, setUserPoints] = useState(12580000) // Mock points

  const handleExchange = () => {
    if (!selectedProduct) return

    if (userPoints < selectedProduct.price) {
      alert('金豆不足！')
      return
    }

    // Deduct points
    setUserPoints((prev) => prev - selectedProduct.price)

    // Close modal and show success (simple alert for now)
    alert(`兑换成功！消耗了 ${selectedProduct.price.toLocaleString()} 金豆`)
    setSelectedProduct(null)
  }

  return (
    <section id="mall" className="py-16 bg-slate-50 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
              <ShoppingBag className="text-purple-500" />
              金豆商城
            </h2>
            <p className="text-slate-400 mt-2">玩游戏赚金豆，好礼免费换</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-200 px-4 py-2 rounded-full flex items-center gap-2 border border-slate-700">
              <span className="text-sm text-primary">
                我的金豆:
                <span className="text-active-primay-background font-bold">
                  {userPoints.toLocaleString()}
                </span>
              </span>
              <GoldBean className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden hover:border-purple-300/50 transition-all duration-300 group flex flex-col shadow-lg hover:shadow-purple-500/10"
            >
              <div className="aspect-4/3 p-4 bg-slate-200/30 flex items-center justify-center relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-primary mb-4">{product.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-orange-500 font-mono font-bold flex items-center gap-1.5">
                    {product.price.toLocaleString()}
                    <GoldBean className="w-4 h-4" />
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-orange-500/20"
                  >
                    立即兑换
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exchange Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-slate-100 border border-slate-700 rounded-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-bold text-primary mb-6">确认兑换</h3>

            <div className="flex items-center gap-4 mb-6 bg-slate-200/50 p-4 rounded-xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover rounded-lg bg-slate-200"
              />
              <div>
                <h4 className="font-bold text-primary">{selectedProduct.name}</h4>
                <div className="text-yellow-400 font-bold flex items-center gap-1 mt-1">
                  {selectedProduct.price.toLocaleString()}
                  <GoldBean className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>当前金豆</span>
                <div className="flex items-center gap-1">
                  <span className="text-primary">{userPoints.toLocaleString()}</span>
                  <GoldBean className="w-3 h-3" />
                </div>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>消耗金豆</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">-{selectedProduct.price.toLocaleString()}</span>
                  <GoldBean className="w-3 h-3" />
                </div>
              </div>
              <div className="border-t border-slate-700 pt-3 flex justify-between font-bold">
                <span className="text-primary">剩余金豆</span>
                <div className="flex items-center gap-1">
                  <span
                    className={
                      userPoints >= selectedProduct.price ? 'text-green-400' : 'text-red-400'
                    }
                  >
                    {(userPoints - selectedProduct.price).toLocaleString()}
                  </span>
                  <GoldBean className="w-3 h-3" />
                </div>
              </div>
            </div>

            <button
              onClick={handleExchange}
              disabled={userPoints < selectedProduct.price}
              className={`w-full py-3 rounded-xl font-bold transition-all ${
                userPoints >= selectedProduct.price
                  ? 'bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-slate-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {userPoints >= selectedProduct.price ? '立即兑换' : '金豆不足'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Mall
