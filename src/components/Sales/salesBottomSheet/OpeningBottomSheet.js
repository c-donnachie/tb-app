import { View, Text, Image } from "react-native"
import React from "react"

export default function OpeningBottomSheet({ data }) {
  return (
    <View className="flex items-center">
      {/* Contenerdor-1 */}
      <View className="flex flex-row gap-8 items-center">
        <View className="flex items-center justify-center">
          <Text>{`${data.inicio}`}</Text>
          <Text>Inicio</Text>
        </View>
        <View className="flex items-center">
          <Text className="text-xl font-semibold">{`${data.nombre}`}</Text>
          <Text>{data.abreviacion}</Text>
        </View>
        <View className="flex items-center justify-center">
          <Text className="">{`${data.hora}`}</Text>
          <Text>Hora</Text>
        </View>
      </View>
      {/* Container-2 */}
      <View className="flex items-center justify-center rounded-xl border-2 border-gray-200 py-2 w-[350] ml-[1] mt-2">
        <View>
          <Text className="mb-3 font-semibold text-lg">Totales</Text>
        </View>
        {/* Contenedor interno */}
        <View className="flex flex-row items-center gap-5">
          <View className="flex items-center justify-center rounded-xl bg-[#F9F9F9] py-2 px-3">
            <Text className="font-semibold text-sm">{`${data.totalEfectivo}`}</Text>
            <Text>Efectivo</Text>
          </View>
          <View className="flex items-center justify-center rounded-xl bg-[#F9F9F9] py-4 px-5">
            <Text className="font-semibold text-sm">{`${data.totalTarjeta}`}</Text>
            <Text>Tarjetas</Text>
          </View>
          <View className="flex items-center justify-center rounded-xl bg-[#F9F9F9] py-2 px-3">
            <Text className="font-semibold text-sm">{`${data.totalWallets}`}</Text>
            <Text>Wallets</Text>
          </View>
        </View>
        <View className="flex flex-row items-center space-x-5 bg-[#F9F9F9] p-2 mt-4 rounded-lg border-2 border-[#4ECB71]">
          <View>
            <Image
              className="w-[24] h-[24]"
              source={require("../../../assets/icons/moneyicon.png")}
            />
          </View>
          <View className="flex items-center">
            <Text className="font-semibold text-sm">{data.totalVenta}</Text>
            <Text>Venta Total</Text>
          </View>
        </View>
      </View>

      <View className="flex flex-row items-center justify-center rounded-xl border-2 border-gray-200 py-4 w-[350] ml-[1] mt-2 space-x-6">
        <View className="flex items-center justify-center">
          <Text>{`${data.totalGastos}`}</Text>
          <Text>Gastos</Text>
        </View>
        <View className="flex items-center justify-center">
          <Text>{`${data.totalFacturas}`}</Text>
          <Text>Facturas</Text>
        </View>
        <View className="flex items-center justify-center">
          <Text>{`${data.TotalDiferencia}`}</Text>
          <Text>Diferencia</Text>
        </View>
      </View>
    </View>
  )
}
