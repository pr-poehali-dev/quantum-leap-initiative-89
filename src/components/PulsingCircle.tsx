import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function PulsingCircle() {
  return (
    <div className="absolute bottom-8 right-8 z-30">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Pulsing Border Circle */}
        <PulsingBorder
          colors={["#c8a84b", "#1a3a22", "#f5f0e8", "#c8a84b", "#ffffff"]}
          colorBack="#00000000"
          speed={1.2}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={4}
          spotsPerColor={4}
          spotSize={0.12}
          pulse={0.15}
          smoke={0.4}
          smokeSize={3}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />

        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text fontSize="8.5" fill="#c8a84b" letterSpacing="1">
            <textPath href="#circle" startOffset="0%">
              SportLife · Спорт · Отдых · Праздники ·
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}