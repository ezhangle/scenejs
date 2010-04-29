/**
 @class SceneJS.TextureLayer

 <p>A layer within a SceneJS.Texture node.</p>

 @constructor
 Create a new SceneJS.TextureLayer
 @param {Object} cfg The config object
 */
SceneJS.TextureLayer = function(cfg) {
        this._imageURL = null;
        this._minFilter = "linear";
        this._magFilter = "linear";
        this._wrapS = "clampToEdge";
        this._wrapT = "clampToEdge";
        this._isDepth = false;
        this._depthMode = "luminance";
        this._depthCompareMode = "compareRToTexture";
        this._depthCompareFunc = "lequal";
        this._flipY = true;
        this._width = 1;
        this._height = 1;
        this._internalFormat = "alpha";
        this._sourceFormat = "alpha";
        this._sourceType = "unsignedByte";
        this._dirty = true; // Needs recreate when this is dirty        
};


