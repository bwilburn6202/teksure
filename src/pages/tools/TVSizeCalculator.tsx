import { useState, useMemo } from 'react';
import { Tv, Eye, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type Resolution = '4k' | '1080p';
type Vision = 'normal' | 'reduced';

export default function TVSizeCalculator() {
  const [distanceFt, setDistanceFt] = useState<string>('8');
  const [resolution, setResolution] = useState<Resolution>('4k');
  const [vision, setVision] = useState<Vision>('normal');
  const [showResult, setShowResult] = useState(false);

  const distanceInches = useMemo(() => {
    const ft = parseFloat(distanceFt);
    if (isNaN(ft) || ft <= 0) return 0;
    return ft * 12;
  }, [distanceFt]);

  // Recommended ratios based on SMPTE / THX guidance, with senior-friendly adjustments
  // 4K can be viewed closer (1x distance for cinematic; 1.5x for typical)
  // 1080p needs 1.5x to 2x for comfort
  // Reduced vision adds a step up (closer = larger screen)
  const recommendation = useMemo(() => {
    if (distanceInches <= 0) return null;

    let ratioMin: number, ratioMax: number;
    if (resolution === '4k') {
      ratioMin = vision === 'reduced' ? 0.6 : 0.7;
      ratioMax = vision === 'reduced' ? 0.9 : 1.0;
    } else {
      ratioMin = vision === 'reduced' ? 0.5 : 0.6;
      ratioMax = vision === 'reduced' ? 0.8 : 0.9;
    }

    const minSize = Math.round(distanceInches * ratioMin);
    const maxSize = Math.round(distanceInches * ratioMax);

    const standardSizes = [32, 40, 43, 50, 55, 60, 65, 70, 75, 77, 85, 86, 98];
    const recommended = standardSizes.find(s => s >= minSize && s <= maxSize) || standardSizes.find(s => s >= minSize) || 65;
    const closestStandard = standardSizes.reduce((closest, size) => {
      const target = (minSize + maxSize) / 2;
      return Math.abs(size - target) < Math.abs(closest - target) ? size : closest;
    });

    return { minSize, maxSize, recommended: closestStandard };
  }, [distanceInches, resolution, vision]);

  const handleCalculate = () => {
    if (recommendation) setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  const getRoomGuidance = (size: number) => {
    if (size <= 43) return 'Bedroom or small den (about 100 sq ft)';
    if (size <= 55) return 'Standard living room or family room (150-250 sq ft)';
    if (size <= 65) return 'Large living room (250-400 sq ft)';
    if (size <= 75) return 'Great room or large open space (400+ sq ft)';
    return 'Home theater or extra-large room';
  };

  const getPriceRange = (size: number) => {
    if (size <= 43) return '$200 – $400';
    if (size <= 55) return '$350 – $700';
    if (size <= 65) return '$500 – $1,000';
    if (size <= 75) return '$800 – $1,500';
    return '$1,500+';
  };

  return (
    <>
      <SEOHead
        title="TV Size Calculator — TekSure"
        description="What size TV should you buy? Enter how far you sit from the TV and we'll recommend a size that's comfortable for your room and eyesight."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-950/60 mb-4">
              <Tv className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">TV Size Calculator</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              What size TV should you buy? Enter your viewing distance and get a recommendation.
            </p>
          </div>

          {!showResult && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              {/* Distance input */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  How far is your couch from the TV?
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="3"
                    max="30"
                    value={distanceFt}
                    onChange={e => setDistanceFt(e.target.value)}
                    className="w-24 text-2xl font-bold text-center rounded-xl px-3 py-3 border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:border-purple-400"
                  />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">feet</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  Most living rooms are 8 to 12 feet between the couch and the TV. Walk it out heel-to-toe — each step is about 2.5 feet.
                </p>
              </div>

              {/* TV resolution */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  What kind of TV are you buying?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setResolution('4k')}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      resolution === '4k'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900 dark:text-gray-100">4K (UHD)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Most TVs sold today</p>
                  </button>
                  <button
                    onClick={() => setResolution('1080p')}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      resolution === '1080p'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900 dark:text-gray-100">1080p (HD)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Older or budget TVs</p>
                  </button>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  Not sure? Pick 4K — almost every TV sold in stores today is 4K.
                </p>
              </div>

              {/* Vision */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  How is your eyesight?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setVision('normal')}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      vision === 'normal'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Good</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">With glasses if needed</p>
                  </button>
                  <button
                    onClick={() => setVision('reduced')}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      vision === 'reduced'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Reduced</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Macular degeneration, cataracts, etc.</p>
                  </button>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={!distanceFt || parseFloat(distanceFt) <= 0}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white font-semibold text-lg transition-colors"
              >
                Get My Recommendation
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {showResult && recommendation && (
            <>
              {/* Recommendation */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm text-center mb-4">
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">Recommended TV size</p>
                <p className="text-7xl font-bold text-gray-900 dark:text-gray-100 my-3">
                  {recommendation.recommended}<span className="text-3xl text-gray-500">"</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Range that works for your room: <strong>{recommendation.minSize}" to {recommendation.maxSize}"</strong>
                </p>
              </div>

              {/* Details */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">What this means</h3>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex gap-3">
                    <Eye className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Comfortable viewing</p>
                      <p>At {distanceFt} feet, a {recommendation.recommended}-inch TV fills your field of view without forcing you to turn your head or strain your eyes.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Room fit</p>
                      <p>{getRoomGuidance(recommendation.recommended)}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl flex-shrink-0">💰</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Typical price</p>
                      <p>{getPriceRange(recommendation.recommended)} for a quality 4K smart TV</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800 dark:text-amber-200">
                    <p className="font-semibold mb-1">Quick Tip</p>
                    <p>When in doubt, go bigger. Studies show most people end up wishing they had bought a larger TV — almost no one wishes they had bought smaller.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
                <div className="flex gap-2">
                  <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-semibold mb-1">Vision considerations</p>
                    <p>For reduced vision (macular degeneration, cataracts), a larger TV with brighter "OLED" or "QLED" technology can make a big difference. Look for "high contrast" and bright peak brightness ratings.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Try Different Numbers
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
