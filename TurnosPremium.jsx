import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function TurnosPremium() {
  const [step, setStep] = useState(1);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");

  const handleSubmit = () => {
    const mensaje = `Hola! Soy ${nombre} y quiero reservar un turno para ${servicio}`;
    const whatsappURL = `https://wa.me/5491123456789?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 p-6 flex flex-col items-center justify-center">
      <Card className="max-w-xl w-full shadow-xl rounded-2xl p-4">
        <CardContent>
          {step === 1 && (
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold">Bienvenido a Turnos Premium 💈</h1>
              <p className="text-sm text-gray-600">
                Reservá tu turno en Corte Premium en 3 pasos simples
              </p>
              <Button className="w-full text-lg" onClick={() => setStep(2)}>
                Reservar Ahora
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Seleccioná un servicio</h2>
              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="w-full border rounded-xl p-2"
              >
                <option value="">-- Elegí un servicio --</option>
                <option value="Corte de pelo">Corte de pelo</option>
                <option value="Perfilado de cejas">Perfilado de cejas</option>
                <option value="Barba y Afeitado">Barba y Afeitado</option>
                <option value="Membresía Premium">Membresía Premium</option>
              </select>
              <Button
                className="w-full"
                onClick={() => servicio && setStep(3)}
                disabled={!servicio}
              >
                Continuar
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Ingresá tus datos</h2>
              <Input
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Input
                placeholder="Teléfono (WhatsApp)"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={handleSubmit}
                disabled={!nombre || !telefono}
              >
                Confirmar y Abrir WhatsApp
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
