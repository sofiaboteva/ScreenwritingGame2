var kaboom = (() => {
  var zt = Object.defineProperty;
  var wi = Object.getOwnPropertyDescriptor;
  var bi = Object.getOwnPropertyNames;
  var vi = Object.prototype.hasOwnProperty;
  var i = (n, e) => zt(n, "name", { value: e, configurable: !0 });
  var yi = (n, e) => {
      for (var o in e) zt(n, o, { get: e[o], enumerable: !0 });
    },
    xi = (n, e, o, h) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let m of bi(e))
          !vi.call(n, m) &&
            m !== o &&
            zt(n, m, {
              get: () => e[m],
              enumerable: !(h = wi(e, m)) || h.enumerable,
            });
      return n;
    };
  var Ui = (n) => xi(zt({}, "__esModule", { value: !0 }), n);
  var mr = (() => {
    for (var n = new Uint8Array(128), e = 0; e < 64; e++)
      n[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return (o) => {
      for (
        var h = o.length,
          m = new Uint8Array(
            (((h - (o[h - 1] == "=") - (o[h - 2] == "=")) * 3) / 4) | 0
          ),
          p = 0,
          R = 0;
        p < h;

      ) {
        var I = n[o.charCodeAt(p++)],
          F = n[o.charCodeAt(p++)],
          v = n[o.charCodeAt(p++)],
          z = n[o.charCodeAt(p++)];
        (m[R++] = (I << 2) | (F >> 4)),
          (m[R++] = (F << 4) | (v >> 2)),
          (m[R++] = (v << 6) | z);
      }
      return m;
    };
  })();
  var so = {};
  yi(so, { default: () => ro });
  function Me(n) {
    return (n * Math.PI) / 180;
  }
  i(Me, "deg2rad");
  function at(n) {
    return (n * 180) / Math.PI;
  }
  i(at, "rad2deg");
  function Fe(n, e, o) {
    return e > o ? Fe(n, o, e) : Math.min(Math.max(n, e), o);
  }
  i(Fe, "clamp");
  function Ie(n, e, o) {
    if (typeof n == "number" && typeof e == "number") return n + (e - n) * o;
    if (n instanceof y && e instanceof y) return n.lerp(e, o);
    if (n instanceof Y && e instanceof Y) return n.lerp(e, o);
    throw new Error(
      `Bad value for lerp(): ${n}, ${e}. Only number, Vec2 and Color is supported.`
    );
  }
  i(Ie, "lerp");
  function Le(n, e, o, h, m) {
    return h + ((n - e) / (o - e)) * (m - h);
  }
  i(Le, "map");
  function gr(n, e, o, h, m) {
    return Fe(Le(n, e, o, h, m), h, m);
  }
  i(gr, "mapc");
  var y = class n {
    static {
      i(this, "Vec2");
    }
    x = 0;
    y = 0;
    constructor(e = 0, o = e) {
      (this.x = e), (this.y = o);
    }
    static fromAngle(e) {
      let o = Me(e);
      return new n(Math.cos(o), Math.sin(o));
    }
    static LEFT = new n(-1, 0);
    static RIGHT = new n(1, 0);
    static UP = new n(0, -1);
    static DOWN = new n(0, 1);
    clone() {
      return new n(this.x, this.y);
    }
    add(...e) {
      let o = T(...e);
      return new n(this.x + o.x, this.y + o.y);
    }
    sub(...e) {
      let o = T(...e);
      return new n(this.x - o.x, this.y - o.y);
    }
    scale(...e) {
      let o = T(...e);
      return new n(this.x * o.x, this.y * o.y);
    }
    dist(...e) {
      let o = T(...e);
      return this.sub(o).len();
    }
    sdist(...e) {
      let o = T(...e);
      return this.sub(o).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let e = this.len();
      return e === 0 ? new n(0) : this.scale(1 / e);
    }
    normal() {
      return new n(this.y, -this.x);
    }
    reflect(e) {
      return this.sub(e.scale(2 * this.dot(e)));
    }
    project(e) {
      return e.scale(e.dot(this) / e.len());
    }
    reject(e) {
      return this.sub(this.project(e));
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    angle(...e) {
      let o = T(...e);
      return at(Math.atan2(this.y - o.y, this.x - o.x));
    }
    angleBetween(...e) {
      let o = T(...e);
      return at(Math.atan2(this.cross(o), this.dot(o)));
    }
    lerp(e, o) {
      return new n(Ie(this.x, e.x, o), Ie(this.y, e.y, o));
    }
    slerp(e, o) {
      let h = this.dot(e),
        m = this.cross(e),
        p = Math.atan2(m, h);
      return this.scale(Math.sin((1 - o) * p))
        .add(e.scale(Math.sin(o * p)))
        .scale(1 / m);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(e) {
      return new n(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
    }
    transform(e) {
      return e.multVec2(this);
    }
    eq(e) {
      return this.x === e.x && this.y === e.y;
    }
    bbox() {
      return new le(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  };
  function T(...n) {
    if (n.length === 1) {
      if (n[0] instanceof y) return new y(n[0].x, n[0].y);
      if (Array.isArray(n[0]) && n[0].length === 2) return new y(...n[0]);
    }
    return new y(...n);
  }
  i(T, "vec2");
  var Y = class n {
    static {
      i(this, "Color");
    }
    r = 255;
    g = 255;
    b = 255;
    constructor(e, o, h) {
      (this.r = Fe(e, 0, 255)),
        (this.g = Fe(o, 0, 255)),
        (this.b = Fe(h, 0, 255));
    }
    static fromArray(e) {
      return new n(e[0], e[1], e[2]);
    }
    static fromHex(e) {
      if (typeof e == "number")
        return new n((e >> 16) & 255, (e >> 8) & 255, (e >> 0) & 255);
      if (typeof e == "string") {
        let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return new n(
          parseInt(o[1], 16),
          parseInt(o[2], 16),
          parseInt(o[3], 16)
        );
      } else throw new Error("Invalid hex color format");
    }
    static fromHSL(e, o, h) {
      if (o == 0) return new n(255 * h, 255 * h, 255 * h);
      let m = i(
          (z, S, $) => (
            $ < 0 && ($ += 1),
            $ > 1 && ($ -= 1),
            $ < 1 / 6
              ? z + (S - z) * 6 * $
              : $ < 1 / 2
              ? S
              : $ < 2 / 3
              ? z + (S - z) * (2 / 3 - $) * 6
              : z
          ),
          "hue2rgb"
        ),
        p = h < 0.5 ? h * (1 + o) : h + o - h * o,
        R = 2 * h - p,
        I = m(R, p, e + 1 / 3),
        F = m(R, p, e),
        v = m(R, p, e - 1 / 3);
      return new n(
        Math.round(I * 255),
        Math.round(F * 255),
        Math.round(v * 255)
      );
    }
    static RED = new n(255, 0, 0);
    static GREEN = new n(0, 255, 0);
    static BLUE = new n(0, 0, 255);
    static YELLOW = new n(255, 255, 0);
    static MAGENTA = new n(255, 0, 255);
    static CYAN = new n(0, 255, 255);
    static WHITE = new n(255, 255, 255);
    static BLACK = new n(0, 0, 0);
    clone() {
      return new n(this.r, this.g, this.b);
    }
    lighten(e) {
      return new n(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
      return this.lighten(-e);
    }
    invert() {
      return new n(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
      return new n(
        (this.r * e.r) / 255,
        (this.g * e.g) / 255,
        (this.b * e.b) / 255
      );
    }
    lerp(e, o) {
      return new n(Ie(this.r, e.r, o), Ie(this.g, e.g, o), Ie(this.b, e.b, o));
    }
    toHSL() {
      let e = this.r / 255,
        o = this.g / 255,
        h = this.b / 255,
        m = Math.max(e, o, h),
        p = Math.min(e, o, h),
        R = (m + p) / 2,
        I = R,
        F = R;
      if (m == p) R = I = 0;
      else {
        let v = m - p;
        switch (((I = F > 0.5 ? v / (2 - m - p) : v / (m + p)), m)) {
          case e:
            R = (o - h) / v + (o < h ? 6 : 0);
            break;
          case o:
            R = (h - e) / v + 2;
            break;
          case h:
            R = (e - o) / v + 4;
            break;
        }
        R /= 6;
      }
      return [R, I, F];
    }
    eq(e) {
      return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return (
        "#" +
        ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
          .toString(16)
          .slice(1)
      );
    }
  };
  function ee(...n) {
    if (n.length === 0) return new Y(255, 255, 255);
    if (n.length === 1) {
      if (n[0] instanceof Y) return n[0].clone();
      if (typeof n[0] == "string") return Y.fromHex(n[0]);
      if (Array.isArray(n[0]) && n[0].length === 3) return Y.fromArray(n[0]);
    }
    return new Y(...n);
  }
  i(ee, "rgb");
  var wr = i((n, e, o) => Y.fromHSL(n, e, o), "hsl2rgb"),
    ae = class n {
      static {
        i(this, "Quad");
      }
      x = 0;
      y = 0;
      w = 1;
      h = 1;
      constructor(e, o, h, m) {
        (this.x = e), (this.y = o), (this.w = h), (this.h = m);
      }
      scale(e) {
        return new n(
          this.x + this.w * e.x,
          this.y + this.h * e.y,
          this.w * e.w,
          this.h * e.h
        );
      }
      pos() {
        return new y(this.x, this.y);
      }
      clone() {
        return new n(this.x, this.y, this.w, this.h);
      }
      eq(e) {
        return (
          this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h
        );
      }
      toString() {
        return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
      }
    };
  function ce(n, e, o, h) {
    return new ae(n, e, o, h);
  }
  i(ce, "quad");
  var Ue = class n {
    static {
      i(this, "Mat4");
    }
    m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    constructor(e) {
      e && (this.m = e);
    }
    static translate(e) {
      return new n([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
    }
    static scale(e) {
      return new n([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(e) {
      e = Me(-e);
      let o = Math.cos(e),
        h = Math.sin(e);
      return new n([1, 0, 0, 0, 0, o, -h, 0, 0, h, o, 0, 0, 0, 0, 1]);
    }
    static rotateY(e) {
      e = Me(-e);
      let o = Math.cos(e),
        h = Math.sin(e);
      return new n([o, 0, h, 0, 0, 1, 0, 0, -h, 0, o, 0, 0, 0, 0, 1]);
    }
    static rotateZ(e) {
      e = Me(-e);
      let o = Math.cos(e),
        h = Math.sin(e);
      return new n([o, -h, 0, 0, h, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(e) {
      return (
        (this.m[12] += this.m[0] * e.x + this.m[4] * e.y),
        (this.m[13] += this.m[1] * e.x + this.m[5] * e.y),
        (this.m[14] += this.m[2] * e.x + this.m[6] * e.y),
        (this.m[15] += this.m[3] * e.x + this.m[7] * e.y),
        this
      );
    }
    scale(e) {
      return (
        (this.m[0] *= e.x),
        (this.m[4] *= e.y),
        (this.m[1] *= e.x),
        (this.m[5] *= e.y),
        (this.m[2] *= e.x),
        (this.m[6] *= e.y),
        (this.m[3] *= e.x),
        (this.m[7] *= e.y),
        this
      );
    }
    rotate(e) {
      e = Me(-e);
      let o = Math.cos(e),
        h = Math.sin(e),
        m = this.m[0],
        p = this.m[1],
        R = this.m[4],
        I = this.m[5];
      return (
        (this.m[0] = m * o + p * h),
        (this.m[1] = -m * h + p * o),
        (this.m[4] = R * o + I * h),
        (this.m[5] = -R * h + I * o),
        this
      );
    }
    mult(e) {
      let o = [];
      for (let h = 0; h < 4; h++)
        for (let m = 0; m < 4; m++)
          o[h * 4 + m] =
            this.m[0 * 4 + m] * e.m[h * 4 + 0] +
            this.m[1 * 4 + m] * e.m[h * 4 + 1] +
            this.m[2 * 4 + m] * e.m[h * 4 + 2] +
            this.m[3 * 4 + m] * e.m[h * 4 + 3];
      return new n(o);
    }
    multVec2(e) {
      return new y(
        e.x * this.m[0] + e.y * this.m[4] + this.m[12],
        e.x * this.m[1] + e.y * this.m[5] + this.m[13]
      );
    }
    getTranslation() {
      return new y(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
          o = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new y(o, e / o);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
          o = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new y(e / o, o);
      } else return new y(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return at(
          this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e)
        );
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return at(
          Math.PI / 2 -
            (this.m[5] > 0
              ? Math.acos(-this.m[4] / e)
              : -Math.acos(this.m[4] / e))
        );
      } else return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new y(
          Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e),
          0
        );
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new y(
          0,
          Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e)
        );
      } else return new y(0, 0);
    }
    invert() {
      let e = [],
        o = this.m[10] * this.m[15] - this.m[14] * this.m[11],
        h = this.m[9] * this.m[15] - this.m[13] * this.m[11],
        m = this.m[9] * this.m[14] - this.m[13] * this.m[10],
        p = this.m[8] * this.m[15] - this.m[12] * this.m[11],
        R = this.m[8] * this.m[14] - this.m[12] * this.m[10],
        I = this.m[8] * this.m[13] - this.m[12] * this.m[9],
        F = this.m[6] * this.m[15] - this.m[14] * this.m[7],
        v = this.m[5] * this.m[15] - this.m[13] * this.m[7],
        z = this.m[5] * this.m[14] - this.m[13] * this.m[6],
        S = this.m[4] * this.m[15] - this.m[12] * this.m[7],
        $ = this.m[4] * this.m[14] - this.m[12] * this.m[6],
        ie = this.m[5] * this.m[15] - this.m[13] * this.m[7],
        U = this.m[4] * this.m[13] - this.m[12] * this.m[5],
        W = this.m[6] * this.m[11] - this.m[10] * this.m[7],
        de = this.m[5] * this.m[11] - this.m[9] * this.m[7],
        ne = this.m[5] * this.m[10] - this.m[9] * this.m[6],
        j = this.m[4] * this.m[11] - this.m[8] * this.m[7],
        C = this.m[4] * this.m[10] - this.m[8] * this.m[6],
        Te = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      (e[0] = this.m[5] * o - this.m[6] * h + this.m[7] * m),
        (e[4] = -(this.m[4] * o - this.m[6] * p + this.m[7] * R)),
        (e[8] = this.m[4] * h - this.m[5] * p + this.m[7] * I),
        (e[12] = -(this.m[4] * m - this.m[5] * R + this.m[6] * I)),
        (e[1] = -(this.m[1] * o - this.m[2] * h + this.m[3] * m)),
        (e[5] = this.m[0] * o - this.m[2] * p + this.m[3] * R),
        (e[9] = -(this.m[0] * h - this.m[1] * p + this.m[3] * I)),
        (e[13] = this.m[0] * m - this.m[1] * R + this.m[2] * I),
        (e[2] = this.m[1] * F - this.m[2] * v + this.m[3] * z),
        (e[6] = -(this.m[0] * F - this.m[2] * S + this.m[3] * $)),
        (e[10] = this.m[0] * ie - this.m[1] * S + this.m[3] * U),
        (e[14] = -(this.m[0] * z - this.m[1] * $ + this.m[2] * U)),
        (e[3] = -(this.m[1] * W - this.m[2] * de + this.m[3] * ne)),
        (e[7] = this.m[0] * W - this.m[2] * j + this.m[3] * C),
        (e[11] = -(this.m[0] * de - this.m[1] * j + this.m[3] * Te)),
        (e[15] = this.m[0] * ne - this.m[1] * C + this.m[2] * Te);
      let q =
        this.m[0] * e[0] +
        this.m[1] * e[4] +
        this.m[2] * e[8] +
        this.m[3] * e[12];
      for (let Ae = 0; Ae < 4; Ae++)
        for (let ye = 0; ye < 4; ye++) e[Ae * 4 + ye] *= 1 / q;
      return new n(e);
    }
    clone() {
      return new n([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  };
  function Ln(n, e, o, h = (m) => -Math.cos(m)) {
    return n + ((h(o) + 1) / 2) * (e - n);
  }
  i(Ln, "wave");
  var Ei = 1103515245,
    Si = 12345,
    pr = 2147483648,
    bt = class {
      static {
        i(this, "RNG");
      }
      seed;
      constructor(e) {
        this.seed = e;
      }
      gen() {
        return (this.seed = (Ei * this.seed + Si) % pr), this.seed / pr;
      }
      genNumber(e, o) {
        return e + this.gen() * (o - e);
      }
      genVec2(e, o) {
        return new y(this.genNumber(e.x, o.x), this.genNumber(e.y, o.y));
      }
      genColor(e, o) {
        return new Y(
          this.genNumber(e.r, o.r),
          this.genNumber(e.g, o.g),
          this.genNumber(e.b, o.b)
        );
      }
      genAny(...e) {
        if (e.length === 0) return this.gen();
        if (e.length === 1) {
          if (typeof e[0] == "number") return this.genNumber(0, e[0]);
          if (e[0] instanceof y) return this.genVec2(T(0, 0), e[0]);
          if (e[0] instanceof Y) return this.genColor(ee(0, 0, 0), e[0]);
        } else if (e.length === 2) {
          if (typeof e[0] == "number" && typeof e[1] == "number")
            return this.genNumber(e[0], e[1]);
          if (e[0] instanceof y && e[1] instanceof y)
            return this.genVec2(e[0], e[1]);
          if (e[0] instanceof Y && e[1] instanceof Y)
            return this.genColor(e[0], e[1]);
        }
      }
    },
    Fn = new bt(Date.now());
  function br(n) {
    return n != null && (Fn.seed = n), Fn.seed;
  }
  i(br, "randSeed");
  function xt(...n) {
    return Fn.genAny(...n);
  }
  i(xt, "rand");
  function Vn(...n) {
    return Math.floor(xt(...n));
  }
  i(Vn, "randi");
  function vr(n) {
    return xt() <= n;
  }
  i(vr, "chance");
  function yr(n) {
    return n[Vn(n.length)];
  }
  i(yr, "choose");
  function xr(n, e) {
    return (
      n.pos.x + n.width > e.pos.x &&
      n.pos.x < e.pos.x + e.width &&
      n.pos.y + n.height > e.pos.y &&
      n.pos.y < e.pos.y + e.height
    );
  }
  i(xr, "testRectRect");
  function Ci(n, e) {
    if (
      (n.p1.x === n.p2.x && n.p1.y === n.p2.y) ||
      (e.p1.x === e.p2.x && e.p1.y === e.p2.y)
    )
      return null;
    let o =
      (e.p2.y - e.p1.y) * (n.p2.x - n.p1.x) -
      (e.p2.x - e.p1.x) * (n.p2.y - n.p1.y);
    if (o === 0) return null;
    let h =
        ((e.p2.x - e.p1.x) * (n.p1.y - e.p1.y) -
          (e.p2.y - e.p1.y) * (n.p1.x - e.p1.x)) /
        o,
      m =
        ((n.p2.x - n.p1.x) * (n.p1.y - e.p1.y) -
          (n.p2.y - n.p1.y) * (n.p1.x - e.p1.x)) /
        o;
    return h < 0 || h > 1 || m < 0 || m > 1 ? null : h;
  }
  i(Ci, "testLineLineT");
  function ot(n, e) {
    let o = Ci(n, e);
    return o
      ? T(n.p1.x + o * (n.p2.x - n.p1.x), n.p1.y + o * (n.p2.y - n.p1.y))
      : null;
  }
  i(ot, "testLineLine");
  function Ur(n, e) {
    if (vt(n, e.p1) || vt(n, e.p2)) return !0;
    let o = n.points();
    return (
      !!ot(e, new Be(o[0], o[1])) ||
      !!ot(e, new Be(o[1], o[2])) ||
      !!ot(e, new Be(o[2], o[3])) ||
      !!ot(e, new Be(o[3], o[0]))
    );
  }
  i(Ur, "testRectLine");
  function vt(n, e) {
    return (
      e.x > n.pos.x &&
      e.x < n.pos.x + n.width &&
      e.y > n.pos.y &&
      e.y < n.pos.y + n.height
    );
  }
  i(vt, "testRectPoint");
  function Er(n, e) {
    let o = e.sub(n.p1),
      h = n.p2.sub(n.p1);
    if (Math.abs(o.cross(h)) > Number.EPSILON) return !1;
    let m = o.dot(h) / h.dot(h);
    return m >= 0 && m <= 1;
  }
  i(Er, "testLinePoint");
  function _n(n, e) {
    let o = n.p2.sub(n.p1),
      h = o.dot(o),
      m = n.p1.sub(e.center),
      p = 2 * o.dot(m),
      R = m.dot(m) - e.radius * e.radius,
      I = p * p - 4 * h * R;
    if (h <= Number.EPSILON || I < 0) return !1;
    if (I == 0) {
      let F = -p / (2 * h);
      if (F >= 0 && F <= 1) return !0;
    } else {
      let F = (-p + Math.sqrt(I)) / (2 * h),
        v = (-p - Math.sqrt(I)) / (2 * h);
      if ((F >= 0 && F <= 1) || (v >= 0 && v <= 1)) return !0;
    }
    return Sr(e, n.p1);
  }
  i(_n, "testLineCircle");
  function Sr(n, e) {
    return n.center.sdist(e) < n.radius * n.radius;
  }
  i(Sr, "testCirclePoint");
  function Cr(n, e) {
    let o = e.pts[e.pts.length - 1];
    for (let h of e.pts) {
      if (_n(new Be(o, h), n)) return !0;
      o = h;
    }
    return Sr(n, e.pts[0]) ? !0 : kn(e, n.center);
  }
  i(Cr, "testCirclePolygon");
  function kn(n, e) {
    let o = !1,
      h = n.pts;
    for (let m = 0, p = h.length - 1; m < h.length; p = m++)
      h[m].y > e.y != h[p].y > e.y &&
        e.x <
          ((h[p].x - h[m].x) * (e.y - h[m].y)) / (h[p].y - h[m].y) + h[m].x &&
        (o = !o);
    return o;
  }
  i(kn, "testPolygonPoint");
  var Be = class n {
      static {
        i(this, "Line");
      }
      p1;
      p2;
      constructor(e, o) {
        (this.p1 = e.clone()), (this.p2 = o.clone());
      }
      transform(e) {
        return new n(e.multVec2(this.p1), e.multVec2(this.p2));
      }
      bbox() {
        return le.fromPoints(this.p1, this.p2);
      }
      area() {
        return this.p1.dist(this.p2);
      }
      clone() {
        return new n(this.p1, this.p2);
      }
    },
    le = class n {
      static {
        i(this, "Rect");
      }
      pos;
      width;
      height;
      constructor(e, o, h) {
        (this.pos = e.clone()), (this.width = o), (this.height = h);
      }
      static fromPoints(e, o) {
        return new n(e.clone(), o.x - e.x, o.y - e.y);
      }
      center() {
        return new y(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
      }
      points() {
        return [
          this.pos,
          this.pos.add(this.width, 0),
          this.pos.add(this.width, this.height),
          this.pos.add(0, this.height),
        ];
      }
      transform(e) {
        return new ze(this.points().map((o) => e.multVec2(o)));
      }
      bbox() {
        return this.clone();
      }
      area() {
        return this.width * this.height;
      }
      clone() {
        return new n(this.pos.clone(), this.width, this.height);
      }
      distToPoint(e) {
        return Math.sqrt(this.sdistToPoint(e));
      }
      sdistToPoint(e) {
        let o = this.pos,
          h = this.pos.add(this.width, this.height),
          m = Math.max(o.x - e.x, 0, e.x - h.x),
          p = Math.max(o.y - e.y, 0, e.y - h.y);
        return m * m + p * p;
      }
    },
    yt = class n {
      static {
        i(this, "Circle");
      }
      center;
      radius;
      constructor(e, o) {
        (this.center = e.clone()), (this.radius = o);
      }
      transform(e) {
        return new In(this.center, this.radius, this.radius).transform(e);
      }
      bbox() {
        return le.fromPoints(
          this.center.sub(T(this.radius)),
          this.center.add(T(this.radius))
        );
      }
      area() {
        return this.radius * this.radius * Math.PI;
      }
      clone() {
        return new n(this.center, this.radius);
      }
    },
    In = class n {
      static {
        i(this, "Ellipse");
      }
      center;
      radiusX;
      radiusY;
      constructor(e, o, h) {
        (this.center = e.clone()), (this.radiusX = o), (this.radiusY = h);
      }
      transform(e) {
        return new n(
          e.multVec2(this.center),
          e.m[0] * this.radiusX,
          e.m[5] * this.radiusY
        );
      }
      bbox() {
        return le.fromPoints(
          this.center.sub(T(this.radiusX, this.radiusY)),
          this.center.add(T(this.radiusX, this.radiusY))
        );
      }
      area() {
        return this.radiusX * this.radiusY * Math.PI;
      }
      clone() {
        return new n(this.center, this.radiusX, this.radiusY);
      }
    },
    ze = class n {
      static {
        i(this, "Polygon");
      }
      pts;
      constructor(e) {
        if (e.length < 3)
          throw new Error("Polygons should have at least 3 vertices");
        this.pts = e;
      }
      transform(e) {
        return new n(this.pts.map((o) => e.multVec2(o)));
      }
      bbox() {
        let e = T(Number.MAX_VALUE),
          o = T(-Number.MAX_VALUE);
        for (let h of this.pts)
          (e.x = Math.min(e.x, h.x)),
            (o.x = Math.max(o.x, h.x)),
            (e.y = Math.min(e.y, h.y)),
            (o.y = Math.max(o.y, h.y));
        return le.fromPoints(e, o);
      }
      area() {
        let e = 0,
          o = this.pts.length;
        for (let h = 0; h < o; h++) {
          let m = this.pts[h],
            p = this.pts[(h + 1) % o];
          (e += m.x * p.y * 0.5), (e -= p.x * m.y * 0.5);
        }
        return Math.abs(e);
      }
      clone() {
        return new n(this.pts.map((e) => e.clone()));
      }
    };
  function Tr(n, e) {
    let o = Number.MAX_VALUE,
      h = T(0);
    for (let m of [n, e])
      for (let p = 0; p < m.pts.length; p++) {
        let R = m.pts[p],
          F = m.pts[(p + 1) % m.pts.length].sub(R).normal().unit(),
          v = Number.MAX_VALUE,
          z = -Number.MAX_VALUE;
        for (let U = 0; U < n.pts.length; U++) {
          let W = n.pts[U].dot(F);
          (v = Math.min(v, W)), (z = Math.max(z, W));
        }
        let S = Number.MAX_VALUE,
          $ = -Number.MAX_VALUE;
        for (let U = 0; U < e.pts.length; U++) {
          let W = e.pts[U].dot(F);
          (S = Math.min(S, W)), ($ = Math.max($, W));
        }
        let ie = Math.min(z, $) - Math.max(v, S);
        if (ie < 0) return null;
        if (ie < Math.abs(o)) {
          let U = $ - v,
            W = S - z;
          (o = Math.abs(U) < Math.abs(W) ? U : W), (h = F.scale(o));
        }
      }
    return h;
  }
  i(Tr, "sat");
  var Ut = class extends Map {
      static {
        i(this, "Registry");
      }
      lastID;
      constructor(...e) {
        super(...e), (this.lastID = 0);
      }
      push(e) {
        let o = this.lastID;
        return this.set(o, e), this.lastID++, o;
      }
      pushd(e) {
        let o = this.push(e);
        return () => this.delete(o);
      }
    },
    Ve = class n {
      static {
        i(this, "EventController");
      }
      paused = !1;
      cancel;
      constructor(e) {
        this.cancel = e;
      }
      static join(e) {
        let o = new n(() => e.forEach((h) => h.cancel()));
        return (
          Object.defineProperty(o, "paused", {
            get: () => e[0].paused,
            set: (h) => e.forEach((m) => (m.paused = h)),
          }),
          (o.paused = !1),
          o
        );
      }
    },
    be = class {
      static {
        i(this, "Event");
      }
      handlers = new Ut();
      add(e) {
        let o = this.handlers.pushd((...m) => {
            h.paused || e(...m);
          }),
          h = new Ve(o);
        return h;
      }
      addOnce(e) {
        let o = this.add((...h) => {
          o.cancel(), e(...h);
        });
        return o;
      }
      next() {
        return new Promise((e) => this.addOnce(e));
      }
      trigger(...e) {
        this.handlers.forEach((o) => o(...e));
      }
      numListeners() {
        return this.handlers.size;
      }
      clear() {
        this.handlers.clear();
      }
    },
    _e = class {
      static {
        i(this, "EventHandler");
      }
      handlers = {};
      on(e, o) {
        return (
          this.handlers[e] || (this.handlers[e] = new be()),
          this.handlers[e].add(o)
        );
      }
      onOnce(e, o) {
        let h = this.on(e, (...m) => {
          h.cancel(), o(...m);
        });
        return h;
      }
      next(e) {
        return new Promise((o) => {
          this.onOnce(e, (...h) => o(h[0]));
        });
      }
      trigger(e, ...o) {
        this.handlers[e] && this.handlers[e].trigger(...o);
      }
      remove(e) {
        delete this.handlers[e];
      }
      clear() {
        this.handlers = {};
      }
      numListeners(e) {
        return this.handlers[e]?.numListeners() ?? 0;
      }
    };
  function Yt(n, e) {
    if (n === e) return !0;
    let o = typeof n,
      h = typeof e;
    if (o !== h) return !1;
    if (o === "object" && h === "object" && n !== null && e !== null) {
      if (Array.isArray(n) !== Array.isArray(e)) return !1;
      let m = Object.keys(n),
        p = Object.keys(e);
      if (m.length !== p.length) return !1;
      for (let R of m) {
        let I = n[R],
          F = e[R];
        if (!Yt(I, F)) return !1;
      }
      return !0;
    }
    return !1;
  }
  i(Yt, "deepEq");
  function Ti(n) {
    let e = window.atob(n),
      o = e.length,
      h = new Uint8Array(o);
    for (let m = 0; m < o; m++) h[m] = e.charCodeAt(m);
    return h.buffer;
  }
  i(Ti, "base64ToArrayBuffer");
  function Or(n) {
    return Ti(n.split(",")[1]);
  }
  i(Or, "dataURLToArrayBuffer");
  function Wt(n, e) {
    let o = document.createElement("a");
    (o.href = e), (o.download = n), o.click();
  }
  i(Wt, "download");
  function Nn(n, e) {
    Wt(n, "data:text/plain;charset=utf-8," + e);
  }
  i(Nn, "downloadText");
  function Rr(n, e) {
    Nn(n, JSON.stringify(e));
  }
  i(Rr, "downloadJSON");
  function jn(n, e) {
    let o = URL.createObjectURL(e);
    Wt(n, o), URL.revokeObjectURL(o);
  }
  i(jn, "downloadBlob");
  var Xt = i((n) => n.match(/^data:\w+\/\w+;base64,.+/), "isDataURL"),
    Pr = i((n) => n.split(".").pop(), "getExt");
  function Ee(n, e) {
    return (...o) => {
      let h = o.length;
      if (h === n.length) return n(...o);
      if (h === e.length) return e(...o);
    };
  }
  i(Ee, "overload2");
  var Dr = (() => {
      let n = 0;
      return () => n++;
    })(),
    Mr = i(
      (n) => (n instanceof Error ? n.message : String(n)),
      "getErrorMessage"
    );
  var Kt = class {
    static {
      i(this, "BinaryHeap");
    }
    _items;
    _compareFn;
    constructor(e = (o, h) => o < h) {
      (this._compareFn = e), (this._items = []);
    }
    insert(e) {
      this._items.push(e), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0) return null;
      let e = this._items[0],
        o = this._items.pop();
      return (
        this._items.length !== 0 && ((this._items[0] = o), this.moveDown(0)), e
      );
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(e) {
      for (; e > 0; ) {
        let o = Math.floor((e - 1) / 2);
        if (
          !this._compareFn(this._items[e], this._items[o]) &&
          this._items[e] >= this._items[o]
        )
          break;
        this.swap(e, o), (e = o);
      }
    }
    moveDown(e) {
      for (; e < Math.floor(this._items.length / 2); ) {
        let o = 2 * e + 1;
        if (
          (o < this._items.length - 1 &&
            !this._compareFn(this._items[o], this._items[o + 1]) &&
            ++o,
          this._compareFn(this._items[e], this._items[o]))
        )
          break;
        this.swap(e, o), (e = o);
      }
    }
    swap(e, o) {
      [this._items[e], this._items[o]] = [this._items[o], this._items[e]];
    }
    get length() {
      return this._items.length;
    }
  };
  var Ai = Object.freeze([
    776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520,
  ]);
  function Gr(n) {
    if (typeof n != "string")
      throw new TypeError("string cannot be undefined or null");
    let e = [],
      o = 0,
      h = 0;
    for (; o < n.length; ) {
      if (
        ((h += Oi(o + h, n)),
        Fi(n[o + h]) && h++,
        Mi(n[o + h]) && h++,
        Gi(n[o + h]) && h++,
        Ii(n[o + h]))
      ) {
        h++;
        continue;
      }
      e.push(n.substring(o, o + h)), (o += h), (h = 0);
    }
    return e;
  }
  i(Gr, "runes");
  function Oi(n, e) {
    let o = e[n];
    if (!Ri(o) || n === e.length - 1) return 1;
    let h = o + e[n + 1],
      m = e.substring(n + 2, n + 5);
    return Ar(h) && Ar(m)
      ? 4
      : Pi(h) && Bi(m)
      ? e.slice(n).indexOf(String.fromCodePoint(917631)) + 2
      : Di(m)
      ? 4
      : 2;
  }
  i(Oi, "nextUnits");
  function Ri(n) {
    return n && tt(n[0].charCodeAt(0), 55296, 56319);
  }
  i(Ri, "isFirstOfSurrogatePair");
  function Ar(n) {
    return tt(Hn(n), 127462, 127487);
  }
  i(Ar, "isRegionalIndicator");
  function Pi(n) {
    return tt(Hn(n), 127988, 127988);
  }
  i(Pi, "isSubdivisionFlag");
  function Di(n) {
    return tt(Hn(n), 127995, 127999);
  }
  i(Di, "isFitzpatrickModifier");
  function Mi(n) {
    return typeof n == "string" && tt(n.charCodeAt(0), 65024, 65039);
  }
  i(Mi, "isVariationSelector");
  function Gi(n) {
    return typeof n == "string" && tt(n.charCodeAt(0), 8400, 8447);
  }
  i(Gi, "isDiacriticalMark");
  function Bi(n) {
    let e = n.codePointAt(0);
    return (
      typeof n == "string" && typeof e == "number" && tt(e, 917504, 917631)
    );
  }
  i(Bi, "isSupplementarySpecialpurposePlane");
  function Fi(n) {
    return typeof n == "string" && Ai.includes(n.charCodeAt(0));
  }
  i(Fi, "isGrapheme");
  function Ii(n) {
    return typeof n == "string" && n.charCodeAt(0) === 8205;
  }
  i(Ii, "isZeroWidthJoiner");
  function Hn(n) {
    let e = n.charCodeAt(0) - 55296,
      o = n.charCodeAt(1) - 56320;
    return (e << 10) + o + 65536;
  }
  i(Hn, "codePointFromSurrogatePair");
  function tt(n, e, o) {
    return n >= e && n <= o;
  }
  i(tt, "betweenInclusive");
  var qn = {
    "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
        17: "capture",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
    "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        9: "select",
        10: "lstick",
        16: "start",
      },
      sticks: { left: { x: 0, y: 1 } },
    },
    "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        9: "start",
        10: "lstick",
        16: "select",
      },
      sticks: { left: { x: 0, y: 1 } },
    },
    "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
        17: "capture",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
    default: {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
  };
  var ut = class {
      static {
        i(this, "ButtonState");
      }
      pressed = new Set([]);
      pressedRepeat = new Set([]);
      released = new Set([]);
      down = new Set([]);
      update() {
        this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
      }
      press(e) {
        this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
      }
      pressRepeat(e) {
        this.pressedRepeat.add(e);
      }
      release(e) {
        this.down.delete(e), this.pressed.delete(e), this.released.add(e);
      }
    },
    $n = class {
      static {
        i(this, "GamepadState");
      }
      buttonState = new ut();
      stickState = new Map();
    },
    zn = class {
      static {
        i(this, "FPSCounter");
      }
      dts = [];
      timer = 0;
      fps = 0;
      tick(e) {
        this.dts.push(e),
          (this.timer += e),
          this.timer >= 1 &&
            ((this.timer = 0),
            (this.fps = Math.round(
              1 / (this.dts.reduce((o, h) => o + h) / this.dts.length)
            )),
            (this.dts = []));
      }
    },
    Br = i((n) => {
      if (!n.canvas) throw new Error("Please provide a canvas");
      let e = {
        canvas: n.canvas,
        loopID: null,
        stopped: !1,
        dt: 0,
        time: 0,
        realTime: 0,
        fpsCounter: new zn(),
        timeScale: 1,
        skipTime: !1,
        numFrames: 0,
        mousePos: new y(0),
        mouseDeltaPos: new y(0),
        keyState: new ut(),
        mouseState: new ut(),
        mergedGamepadState: new $n(),
        gamepadStates: new Map(),
        gamepads: [],
        charInputted: [],
        isMouseMoved: !1,
        lastWidth: n.canvas.offsetWidth,
        lastHeight: n.canvas.offsetHeight,
        events: new _e(),
      };
      function o() {
        return e.canvas;
      }
      i(o, "canvas");
      function h() {
        return e.dt * e.timeScale;
      }
      i(h, "dt");
      function m() {
        return e.time;
      }
      i(m, "time");
      function p() {
        return e.fpsCounter.fps;
      }
      i(p, "fps");
      function R() {
        return e.numFrames;
      }
      i(R, "numFrames");
      function I() {
        return e.canvas.toDataURL();
      }
      i(I, "screenshot");
      function F(d) {
        e.canvas.style.cursor = d;
      }
      i(F, "setCursor");
      function v() {
        return e.canvas.style.cursor;
      }
      i(v, "getCursor");
      function z(d) {
        if (d)
          try {
            let x = e.canvas.requestPointerLock();
            x.catch && x.catch((O) => console.error(O));
          } catch (x) {
            console.error(x);
          }
        else document.exitPointerLock();
      }
      i(z, "setCursorLocked");
      function S() {
        return !!document.pointerLockElement;
      }
      i(S, "isCursorLocked");
      function $(d) {
        d.requestFullscreen
          ? d.requestFullscreen()
          : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
      }
      i($, "enterFullscreen");
      function ie() {
        document.exitFullscreen
          ? document.exitFullscreen()
          : document.webkitExitFullScreen && document.webkitExitFullScreen();
      }
      i(ie, "exitFullscreen");
      function U() {
        return document.fullscreenElement || document.webkitFullscreenElement;
      }
      i(U, "getFullscreenElement");
      function W(d = !0) {
        d ? $(e.canvas) : ie();
      }
      i(W, "setFullscreen");
      function de() {
        return !!U();
      }
      i(de, "isFullscreen");
      function ne() {
        e.stopped = !0;
        for (let d in X) e.canvas.removeEventListener(d, X[d]);
        for (let d in he) document.removeEventListener(d, he[d]);
        for (let d in Ce) window.removeEventListener(d, Ce[d]);
        He.disconnect();
      }
      i(ne, "quit");
      function j(d) {
        e.loopID !== null && cancelAnimationFrame(e.loopID);
        let x = 0,
          O = i((k) => {
            if (e.stopped) return;
            if (document.visibilityState !== "visible") {
              e.loopID = requestAnimationFrame(O);
              return;
            }
            let te = k / 1e3,
              J = te - e.realTime,
              Oe = n.maxFPS ? 1 / n.maxFPS : 0;
            (e.realTime = te),
              (x += J),
              x > Oe &&
                (e.skipTime ||
                  ((e.dt = x), (e.time += h()), e.fpsCounter.tick(e.dt)),
                (x = 0),
                (e.skipTime = !1),
                e.numFrames++,
                yn(),
                d(),
                xn()),
              (e.loopID = requestAnimationFrame(O));
          }, "frame");
        O(0);
      }
      i(j, "run");
      function C() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
      i(C, "isTouchscreen");
      function Te() {
        return e.mousePos.clone();
      }
      i(Te, "mousePos");
      function q() {
        return e.mouseDeltaPos.clone();
      }
      i(q, "mouseDeltaPos");
      function Ae(d = "left") {
        return e.mouseState.pressed.has(d);
      }
      i(Ae, "isMousePressed");
      function ye(d = "left") {
        return e.mouseState.down.has(d);
      }
      i(ye, "isMouseDown");
      function Se(d = "left") {
        return e.mouseState.released.has(d);
      }
      i(Se, "isMouseReleased");
      function st() {
        return e.isMouseMoved;
      }
      i(st, "isMouseMoved");
      function on(d) {
        return d === void 0
          ? e.keyState.pressed.size > 0
          : e.keyState.pressed.has(d);
      }
      i(on, "isKeyPressed");
      function Ct(d) {
        return d === void 0
          ? e.keyState.pressedRepeat.size > 0
          : e.keyState.pressedRepeat.has(d);
      }
      i(Ct, "isKeyPressedRepeat");
      function Tt(d) {
        return d === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(d);
      }
      i(Tt, "isKeyDown");
      function At(d) {
        return d === void 0
          ? e.keyState.released.size > 0
          : e.keyState.released.has(d);
      }
      i(At, "isKeyReleased");
      function Ke(d) {
        return d === void 0
          ? e.mergedGamepadState.buttonState.pressed.size > 0
          : e.mergedGamepadState.buttonState.pressed.has(d);
      }
      i(Ke, "isGamepadButtonPressed");
      function an(d) {
        return d === void 0
          ? e.mergedGamepadState.buttonState.down.size > 0
          : e.mergedGamepadState.buttonState.down.has(d);
      }
      i(an, "isGamepadButtonDown");
      function un(d) {
        return d === void 0
          ? e.mergedGamepadState.buttonState.released.size > 0
          : e.mergedGamepadState.buttonState.released.has(d);
      }
      i(un, "isGamepadButtonReleased");
      function cn(d) {
        return e.events.on("resize", d);
      }
      i(cn, "onResize");
      let hn = Ee(
          (d) => e.events.on("keyDown", d),
          (d, x) => e.events.on("keyDown", (O) => O === d && x(d))
        ),
        ln = Ee(
          (d) => e.events.on("keyPress", d),
          (d, x) => e.events.on("keyPress", (O) => O === d && x(d))
        ),
        dn = Ee(
          (d) => e.events.on("keyPressRepeat", d),
          (d, x) => e.events.on("keyPressRepeat", (O) => O === d && x(d))
        ),
        Ot = Ee(
          (d) => e.events.on("keyRelease", d),
          (d, x) => e.events.on("keyRelease", (O) => O === d && x(d))
        ),
        Rt = Ee(
          (d) => e.events.on("mouseDown", (x) => d(x)),
          (d, x) => e.events.on("mouseDown", (O) => O === d && x(O))
        ),
        Pt = Ee(
          (d) => e.events.on("mousePress", (x) => d(x)),
          (d, x) => e.events.on("mousePress", (O) => O === d && x(O))
        ),
        Dt = Ee(
          (d) => e.events.on("mouseRelease", (x) => d(x)),
          (d, x) => e.events.on("mouseRelease", (O) => O === d && x(O))
        );
      function Mt(d) {
        return e.events.on("mouseMove", () => d(Te(), q()));
      }
      i(Mt, "onMouseMove");
      function fn(d) {
        return e.events.on("charInput", d);
      }
      i(fn, "onCharInput");
      function ht(d) {
        return e.events.on("touchStart", d);
      }
      i(ht, "onTouchStart");
      function mn(d) {
        return e.events.on("touchMove", d);
      }
      i(mn, "onTouchMove");
      function pn(d) {
        return e.events.on("touchEnd", d);
      }
      i(pn, "onTouchEnd");
      function Gt(d) {
        return e.events.on("scroll", d);
      }
      i(Gt, "onScroll");
      function gn(d) {
        return e.events.on("hide", d);
      }
      i(gn, "onHide");
      function Bt(d) {
        return e.events.on("show", d);
      }
      i(Bt, "onShow");
      function Ft(d, x) {
        if (typeof d == "function") return e.events.on("gamepadButtonDown", d);
        if (typeof d == "string" && typeof x == "function")
          return e.events.on("gamepadButtonDown", (O) => O === d && x(d));
      }
      i(Ft, "onGamepadButtonDown");
      function wn(d, x) {
        if (typeof d == "function") return e.events.on("gamepadButtonPress", d);
        if (typeof d == "string" && typeof x == "function")
          return e.events.on("gamepadButtonPress", (O) => O === d && x(d));
      }
      i(wn, "onGamepadButtonPress");
      function lt(d, x) {
        if (typeof d == "function")
          return e.events.on("gamepadButtonRelease", d);
        if (typeof d == "string" && typeof x == "function")
          return e.events.on("gamepadButtonRelease", (O) => O === d && x(d));
      }
      i(lt, "onGamepadButtonRelease");
      function bn(d, x) {
        return e.events.on("gamepadStick", (O, k) => O === d && x(k));
      }
      i(bn, "onGamepadStick");
      function dt(d) {
        e.events.on("gamepadConnect", d);
      }
      i(dt, "onGamepadConnect");
      function Pe(d) {
        e.events.on("gamepadDisconnect", d);
      }
      i(Pe, "onGamepadDisconnect");
      function It(d) {
        return e.mergedGamepadState.stickState.get(d) || new y(0);
      }
      i(It, "getGamepadStick");
      function vn() {
        return [...e.charInputted];
      }
      i(vn, "charInputted");
      function ft() {
        return [...e.gamepads];
      }
      i(ft, "getGamepads");
      function yn() {
        e.events.trigger("input"),
          e.keyState.down.forEach((d) => e.events.trigger("keyDown", d)),
          e.mouseState.down.forEach((d) => e.events.trigger("mouseDown", d)),
          je();
      }
      i(yn, "processInput");
      function xn() {
        e.keyState.update(),
          e.mouseState.update(),
          e.mergedGamepadState.buttonState.update(),
          e.mergedGamepadState.stickState.forEach((d, x) => {
            e.mergedGamepadState.stickState.set(x, new y(0));
          }),
          (e.charInputted = []),
          (e.isMouseMoved = !1),
          e.gamepadStates.forEach((d) => {
            d.buttonState.update(),
              d.stickState.forEach((x, O) => {
                d.stickState.set(O, new y(0));
              });
          });
      }
      i(xn, "resetInput");
      function re(d) {
        let x = {
          index: d.index,
          isPressed: (O) =>
            e.gamepadStates.get(d.index).buttonState.pressed.has(O),
          isDown: (O) => e.gamepadStates.get(d.index).buttonState.down.has(O),
          isReleased: (O) =>
            e.gamepadStates.get(d.index).buttonState.released.has(O),
          getStick: (O) => e.gamepadStates.get(d.index).stickState.get(O),
        };
        return (
          e.gamepads.push(x),
          e.gamepadStates.set(d.index, {
            buttonState: new ut(),
            stickState: new Map([
              ["left", new y(0)],
              ["right", new y(0)],
            ]),
          }),
          x
        );
      }
      i(re, "registerGamepad");
      function Ne(d) {
        (e.gamepads = e.gamepads.filter((x) => x.index !== d.index)),
          e.gamepadStates.delete(d.index);
      }
      i(Ne, "removeGamepad");
      function je() {
        for (let d of navigator.getGamepads())
          d && !e.gamepadStates.has(d.index) && re(d);
        for (let d of e.gamepads) {
          let x = navigator.getGamepads()[d.index],
            k = (n.gamepads ?? {})[x.id] ?? qn[x.id] ?? qn.default,
            te = e.gamepadStates.get(d.index);
          for (let J = 0; J < x.buttons.length; J++)
            x.buttons[J].pressed
              ? (te.buttonState.down.has(k.buttons[J]) ||
                  (e.mergedGamepadState.buttonState.press(k.buttons[J]),
                  te.buttonState.press(k.buttons[J]),
                  e.events.trigger("gamepadButtonPress", k.buttons[J])),
                e.events.trigger("gamepadButtonDown", k.buttons[J]))
              : te.buttonState.down.has(k.buttons[J]) &&
                (e.mergedGamepadState.buttonState.release(k.buttons[J]),
                te.buttonState.release(k.buttons[J]),
                e.events.trigger("gamepadButtonRelease", k.buttons[J]));
          for (let J in k.sticks) {
            let Oe = k.sticks[J],
              qe = new y(x.axes[Oe.x], x.axes[Oe.y]);
            te.stickState.set(J, qe),
              e.mergedGamepadState.stickState.set(J, qe),
              e.events.trigger("gamepadStick", J, qe);
          }
        }
      }
      i(je, "processGamepad");
      let X = {},
        he = {},
        Ce = {},
        Ye = n.pixelDensity || window.devicePixelRatio || 1;
      X.mousemove = (d) => {
        let x = new y(d.offsetX, d.offsetY),
          O = new y(d.movementX, d.movementY);
        if (de()) {
          let k = e.canvas.width / Ye,
            te = e.canvas.height / Ye,
            J = window.innerWidth,
            Oe = window.innerHeight,
            qe = J / Oe,
            Vt = k / te;
          if (qe > Vt) {
            let pe = Oe / te,
              it = (J - k * pe) / 2;
            (x.x = Le(d.offsetX - it, 0, k * pe, 0, k)),
              (x.y = Le(d.offsetY, 0, te * pe, 0, te));
          } else {
            let pe = J / k,
              it = (Oe - te * pe) / 2;
            (x.x = Le(d.offsetX, 0, k * pe, 0, k)),
              (x.y = Le(d.offsetY - it, 0, te * pe, 0, te));
          }
        }
        e.events.onOnce("input", () => {
          (e.isMouseMoved = !0),
            (e.mousePos = x),
            (e.mouseDeltaPos = O),
            e.events.trigger("mouseMove");
        });
      };
      let Lt = ["left", "middle", "right", "back", "forward"];
      (X.mousedown = (d) => {
        e.events.onOnce("input", () => {
          let x = Lt[d.button];
          x && (e.mouseState.press(x), e.events.trigger("mousePress", x));
        });
      }),
        (X.mouseup = (d) => {
          e.events.onOnce("input", () => {
            let x = Lt[d.button];
            x && (e.mouseState.release(x), e.events.trigger("mouseRelease", x));
          });
        });
      let We = new Set([
          " ",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Tab",
        ]),
        ge = {
          ArrowLeft: "left",
          ArrowRight: "right",
          ArrowUp: "up",
          ArrowDown: "down",
          " ": "space",
        };
      (X.keydown = (d) => {
        We.has(d.key) && d.preventDefault(),
          e.events.onOnce("input", () => {
            let x = ge[d.key] || d.key.toLowerCase();
            x.length === 1
              ? (e.events.trigger("charInput", x), e.charInputted.push(x))
              : x === "space" &&
                (e.events.trigger("charInput", " "), e.charInputted.push(" ")),
              d.repeat
                ? (e.keyState.pressRepeat(x),
                  e.events.trigger("keyPressRepeat", x))
                : (e.keyState.press(x),
                  e.events.trigger("keyPressRepeat", x),
                  e.events.trigger("keyPress", x));
          });
      }),
        (X.keyup = (d) => {
          e.events.onOnce("input", () => {
            let x = ge[d.key] || d.key.toLowerCase();
            e.keyState.release(x), e.events.trigger("keyRelease", x);
          });
        }),
        (X.touchstart = (d) => {
          d.preventDefault(),
            e.events.onOnce("input", () => {
              let x = [...d.changedTouches],
                O = e.canvas.getBoundingClientRect();
              n.touchToMouse !== !1 &&
                ((e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y)),
                e.mouseState.press("left"),
                e.events.trigger("mousePress", "left")),
                x.forEach((k) => {
                  e.events.trigger(
                    "touchStart",
                    new y(k.clientX - O.x, k.clientY - O.y),
                    k
                  );
                });
            });
        }),
        (X.touchmove = (d) => {
          d.preventDefault(),
            e.events.onOnce("input", () => {
              let x = [...d.changedTouches],
                O = e.canvas.getBoundingClientRect();
              n.touchToMouse !== !1 &&
                ((e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y)),
                e.events.trigger("mouseMove")),
                x.forEach((k) => {
                  e.events.trigger(
                    "touchMove",
                    new y(k.clientX - O.x, k.clientY - O.y),
                    k
                  );
                });
            });
        }),
        (X.touchend = (d) => {
          e.events.onOnce("input", () => {
            let x = [...d.changedTouches],
              O = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 &&
              ((e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y)),
              e.mouseState.release("left"),
              e.events.trigger("mouseRelease", "left")),
              x.forEach((k) => {
                e.events.trigger(
                  "touchEnd",
                  new y(k.clientX - O.x, k.clientY - O.y),
                  k
                );
              });
          });
        }),
        (X.touchcancel = (d) => {
          e.events.onOnce("input", () => {
            let x = [...d.changedTouches],
              O = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 &&
              ((e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y)),
              e.mouseState.release("left"),
              e.events.trigger("mouseRelease", "left")),
              x.forEach((k) => {
                e.events.trigger(
                  "touchEnd",
                  new y(k.clientX - O.x, k.clientY - O.y),
                  k
                );
              });
          });
        }),
        (X.wheel = (d) => {
          d.preventDefault(),
            e.events.onOnce("input", () => {
              e.events.trigger("scroll", new y(d.deltaX, d.deltaY));
            });
        }),
        (X.contextmenu = (d) => d.preventDefault()),
        (he.visibilitychange = () => {
          document.visibilityState === "visible"
            ? ((e.skipTime = !0), e.events.trigger("show"))
            : e.events.trigger("hide");
        }),
        (Ce.gamepadconnected = (d) => {
          let x = re(d.gamepad);
          e.events.onOnce("input", () => {
            e.events.trigger("gamepadConnect", x);
          });
        }),
        (Ce.gamepaddisconnected = (d) => {
          let x = ft().filter((O) => O.index === d.gamepad.index)[0];
          Ne(d.gamepad),
            e.events.onOnce("input", () => {
              e.events.trigger("gamepadDisconnect", x);
            });
        });
      for (let d in X) e.canvas.addEventListener(d, X[d]);
      for (let d in he) document.addEventListener(d, he[d]);
      for (let d in Ce) window.addEventListener(d, Ce[d]);
      let He = new ResizeObserver((d) => {
        for (let x of d)
          if (x.target === e.canvas) {
            if (
              e.lastWidth === e.canvas.offsetWidth &&
              e.lastHeight === e.canvas.offsetHeight
            )
              return;
            (e.lastWidth = e.canvas.offsetWidth),
              (e.lastHeight = e.canvas.offsetHeight),
              e.events.onOnce("input", () => {
                e.events.trigger("resize");
              });
          }
      });
      return (
        He.observe(e.canvas),
        {
          dt: h,
          time: m,
          run: j,
          canvas: o,
          fps: p,
          numFrames: R,
          quit: ne,
          setFullscreen: W,
          isFullscreen: de,
          setCursor: F,
          screenshot: I,
          getGamepads: ft,
          getCursor: v,
          setCursorLocked: z,
          isCursorLocked: S,
          isTouchscreen: C,
          mousePos: Te,
          mouseDeltaPos: q,
          isKeyDown: Tt,
          isKeyPressed: on,
          isKeyPressedRepeat: Ct,
          isKeyReleased: At,
          isMouseDown: ye,
          isMousePressed: Ae,
          isMouseReleased: Se,
          isMouseMoved: st,
          isGamepadButtonPressed: Ke,
          isGamepadButtonDown: an,
          isGamepadButtonReleased: un,
          getGamepadStick: It,
          charInputted: vn,
          onResize: cn,
          onKeyDown: hn,
          onKeyPress: ln,
          onKeyPressRepeat: dn,
          onKeyRelease: Ot,
          onMouseDown: Rt,
          onMousePress: Pt,
          onMouseRelease: Dt,
          onMouseMove: Mt,
          onCharInput: fn,
          onTouchStart: ht,
          onTouchMove: mn,
          onTouchEnd: pn,
          onScroll: Gt,
          onHide: gn,
          onShow: Bt,
          onGamepadButtonDown: Ft,
          onGamepadButtonPress: wn,
          onGamepadButtonRelease: lt,
          onGamepadStick: bn,
          onGamepadConnect: dt,
          onGamepadDisconnect: Pe,
          events: e.events,
        }
      );
    }, "default");
  var Re = class n {
      static {
        i(this, "Texture");
      }
      ctx;
      src = null;
      glTex;
      width;
      height;
      constructor(e, o, h, m = {}) {
        this.ctx = e;
        let p = e.gl;
        (this.glTex = e.gl.createTexture()),
          e.onDestroy(() => this.free()),
          (this.width = o),
          (this.height = h);
        let R =
            { linear: p.LINEAR, nearest: p.NEAREST }[
              m.filter ?? e.opts.texFilter
            ] ?? p.NEAREST,
          I =
            { repeat: p.REPEAT, clampToEadge: p.CLAMP_TO_EDGE }[m.wrap] ??
            p.CLAMP_TO_EDGE;
        this.bind(),
          o &&
            h &&
            p.texImage2D(
              p.TEXTURE_2D,
              0,
              p.RGBA,
              o,
              h,
              0,
              p.RGBA,
              p.UNSIGNED_BYTE,
              null
            ),
          p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, R),
          p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, R),
          p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, I),
          p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, I),
          this.unbind();
      }
      static fromImage(e, o, h = {}) {
        let m = new n(e, o.width, o.height, h);
        return m.update(o), (m.src = o), m;
      }
      update(e, o = 0, h = 0) {
        let m = this.ctx.gl;
        this.bind(),
          m.texSubImage2D(m.TEXTURE_2D, 0, o, h, m.RGBA, m.UNSIGNED_BYTE, e),
          this.unbind();
      }
      bind() {
        this.ctx.pushTexture2D(this.glTex);
      }
      unbind() {
        this.ctx.popTexture2D();
      }
      free() {
        this.ctx.gl.deleteTexture(this.glTex);
      }
    },
    rt = class {
      static {
        i(this, "FrameBuffer");
      }
      ctx;
      tex;
      glFramebuffer;
      glRenderbuffer;
      constructor(e, o, h, m = {}) {
        this.ctx = e;
        let p = e.gl;
        e.onDestroy(() => this.free()),
          (this.tex = new Re(e, o, h, m)),
          (this.glFramebuffer = p.createFramebuffer()),
          (this.glRenderbuffer = p.createRenderbuffer()),
          this.bind(),
          p.renderbufferStorage(p.RENDERBUFFER, p.DEPTH_STENCIL, o, h),
          p.framebufferTexture2D(
            p.FRAMEBUFFER,
            p.COLOR_ATTACHMENT0,
            p.TEXTURE_2D,
            this.tex.glTex,
            0
          ),
          p.framebufferRenderbuffer(
            p.FRAMEBUFFER,
            p.DEPTH_STENCIL_ATTACHMENT,
            p.RENDERBUFFER,
            this.glRenderbuffer
          ),
          this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      toImageData() {
        let e = this.ctx.gl,
          o = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(),
          e.readPixels(
            0,
            0,
            this.width,
            this.height,
            e.RGBA,
            e.UNSIGNED_BYTE,
            o
          ),
          this.unbind();
        let h = this.width * 4,
          m = new Uint8Array(h);
        for (let p = 0; p < ((this.height / 2) | 0); p++) {
          let R = p * h,
            I = (this.height - p - 1) * h;
          m.set(o.subarray(R, R + h)), o.copyWithin(R, I, I + h), o.set(m, I);
        }
        return new ImageData(o, this.width, this.height);
      }
      toDataURL() {
        let e = document.createElement("canvas"),
          o = e.getContext("2d");
        return (
          (e.width = this.width),
          (e.height = this.height),
          o.putImageData(this.toImageData(), 0, 0),
          e.toDataURL()
        );
      }
      draw(e) {
        this.bind(), e(), this.unbind();
      }
      bind() {
        this.ctx.pushFramebuffer(this.glFramebuffer),
          this.ctx.pushRenderbuffer(this.glRenderbuffer),
          this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
      }
      unbind() {
        this.ctx.popFramebuffer(),
          this.ctx.popRenderbuffer(),
          this.ctx.popViewport();
      }
      free() {
        let e = this.ctx.gl;
        e.deleteFramebuffer(this.glFramebuffer),
          e.deleteRenderbuffer(this.glRenderbuffer),
          this.tex.free();
      }
    },
    Jt = class {
      static {
        i(this, "Shader");
      }
      ctx;
      glProgram;
      constructor(e, o, h, m) {
        (this.ctx = e), e.onDestroy(() => this.free());
        let p = e.gl,
          R = p.createShader(p.VERTEX_SHADER),
          I = p.createShader(p.FRAGMENT_SHADER);
        p.shaderSource(R, o),
          p.shaderSource(I, h),
          p.compileShader(R),
          p.compileShader(I);
        let F = p.createProgram();
        if (
          ((this.glProgram = F),
          p.attachShader(F, R),
          p.attachShader(F, I),
          m.forEach((v, z) => p.bindAttribLocation(F, z, v)),
          p.linkProgram(F),
          !p.getProgramParameter(F, p.LINK_STATUS))
        ) {
          let v = p.getShaderInfoLog(R);
          if (v) throw new Error("VERTEX SHADER " + v);
          let z = p.getShaderInfoLog(I);
          if (z) throw new Error("FRAGMENT SHADER " + z);
        }
        p.deleteShader(R), p.deleteShader(I);
      }
      bind() {
        this.ctx.pushProgram(this.glProgram);
      }
      unbind() {
        this.ctx.popProgram();
      }
      send(e) {
        let o = this.ctx.gl;
        for (let h in e) {
          let m = e[h],
            p = o.getUniformLocation(this.glProgram, h);
          typeof m == "number"
            ? o.uniform1f(p, m)
            : m instanceof Ue
            ? o.uniformMatrix4fv(p, !1, new Float32Array(m.m))
            : m instanceof Y
            ? o.uniform3f(p, m.r, m.g, m.b)
            : m instanceof y && o.uniform2f(p, m.x, m.y);
        }
      }
      free() {
        this.ctx.gl.deleteProgram(this.glProgram);
      }
    },
    Qt = class {
      static {
        i(this, "BatchRenderer");
      }
      ctx;
      glVBuf;
      glIBuf;
      vqueue = [];
      iqueue = [];
      stride;
      maxVertices;
      maxIndices;
      vertexFormat;
      numDraws = 0;
      curPrimitive = null;
      curTex = null;
      curShader = null;
      curUniform = {};
      constructor(e, o, h, m) {
        let p = e.gl;
        (this.vertexFormat = o),
          (this.ctx = e),
          (this.stride = o.reduce((R, I) => R + I.size, 0)),
          (this.maxVertices = h),
          (this.maxIndices = m),
          (this.glVBuf = p.createBuffer()),
          e.pushArrayBuffer(this.glVBuf),
          p.bufferData(p.ARRAY_BUFFER, h * 4, p.DYNAMIC_DRAW),
          e.popArrayBuffer(),
          (this.glIBuf = p.createBuffer()),
          e.pushElementArrayBuffer(this.glIBuf),
          p.bufferData(p.ELEMENT_ARRAY_BUFFER, m * 4, p.DYNAMIC_DRAW),
          e.popElementArrayBuffer();
      }
      push(e, o, h, m, p = null, R = {}) {
        (e !== this.curPrimitive ||
          p !== this.curTex ||
          m !== this.curShader ||
          !Yt(this.curUniform, R) ||
          this.vqueue.length + o.length * this.stride > this.maxVertices ||
          this.iqueue.length + h.length > this.maxIndices) &&
          this.flush();
        let I = this.vqueue.length / this.stride;
        for (let F of o) this.vqueue.push(F);
        for (let F of h) this.iqueue.push(F + I);
        (this.curPrimitive = e),
          (this.curShader = m),
          (this.curTex = p),
          (this.curUniform = R);
      }
      flush() {
        if (
          !this.curPrimitive ||
          !this.curShader ||
          this.vqueue.length === 0 ||
          this.iqueue.length === 0
        )
          return;
        let e = this.ctx.gl;
        this.ctx.pushArrayBuffer(this.glVBuf),
          e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)),
          this.ctx.pushElementArrayBuffer(this.glIBuf),
          e.bufferSubData(
            e.ELEMENT_ARRAY_BUFFER,
            0,
            new Uint16Array(this.iqueue)
          ),
          this.ctx.setVertexFormat(this.vertexFormat),
          this.curShader.bind(),
          this.curShader.send(this.curUniform),
          this.curTex?.bind(),
          e.drawElements(
            this.curPrimitive,
            this.iqueue.length,
            e.UNSIGNED_SHORT,
            0
          ),
          this.curTex?.unbind(),
          this.curShader.unbind(),
          this.ctx.popArrayBuffer(),
          this.ctx.popElementArrayBuffer(),
          (this.vqueue = []),
          (this.iqueue = []),
          this.numDraws++;
      }
      free() {
        let e = this.ctx.gl;
        e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
      }
    };
  function nt(n) {
    let e = [],
      o = i((p) => {
        e.push(p), n(p);
      }, "push"),
      h = i(() => {
        e.pop(), n(m() ?? null);
      }, "pop"),
      m = i(() => e[e.length - 1], "cur");
    return [o, h, m];
  }
  i(nt, "genStack");
  function Kn(n, e = {}) {
    let o = [];
    function h(q) {
      o.push(q);
    }
    i(h, "onDestroy");
    function m() {
      o.forEach((q) => q()), n.getExtension("WEBGL_lose_context").loseContext();
    }
    i(m, "destroy");
    let p = null;
    function R(q) {
      if (Yt(q, p)) return;
      p = q;
      let Ae = q.reduce((ye, Se) => ye + Se.size, 0);
      q.reduce(
        (ye, Se, st) => (
          n.vertexAttribPointer(st, Se.size, n.FLOAT, !1, Ae * 4, ye),
          n.enableVertexAttribArray(st),
          ye + Se.size * 4
        ),
        0
      );
    }
    i(R, "setVertexFormat");
    let [I, F] = nt((q) => n.bindTexture(n.TEXTURE_2D, q)),
      [v, z] = nt((q) => n.bindBuffer(n.ARRAY_BUFFER, q)),
      [S, $] = nt((q) => n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, q)),
      [ie, U] = nt((q) => n.bindFramebuffer(n.FRAMEBUFFER, q)),
      [W, de] = nt((q) => n.bindRenderbuffer(n.RENDERBUFFER, q)),
      [ne, j] = nt(({ x: q, y: Ae, w: ye, h: Se }) => {
        n.viewport(q, Ae, ye, Se);
      }),
      [C, Te] = nt((q) => n.useProgram(q));
    return (
      ne({ x: 0, y: 0, w: n.drawingBufferWidth, h: n.drawingBufferHeight }),
      {
        gl: n,
        opts: e,
        onDestroy: h,
        destroy: m,
        pushTexture2D: I,
        popTexture2D: F,
        pushArrayBuffer: v,
        popArrayBuffer: z,
        pushElementArrayBuffer: S,
        popElementArrayBuffer: $,
        pushFramebuffer: ie,
        popFramebuffer: U,
        pushRenderbuffer: W,
        popRenderbuffer: de,
        pushViewport: ne,
        popViewport: j,
        pushProgram: C,
        popProgram: Te,
        setVertexFormat: R,
      }
    );
  }
  i(Kn, "initGfx");
  var ve = class n {
      static {
        i(this, "Asset");
      }
      loaded = !1;
      data = null;
      error = null;
      onLoadEvents = new be();
      onErrorEvents = new be();
      onFinishEvents = new be();
      constructor(e) {
        e.then((o) => {
          (this.data = o), this.onLoadEvents.trigger(o);
        })
          .catch((o) => {
            if (((this.error = o), this.onErrorEvents.numListeners() > 0))
              this.onErrorEvents.trigger(o);
            else throw o;
          })
          .finally(() => {
            this.onFinishEvents.trigger(), (this.loaded = !0);
          });
      }
      static loaded(e) {
        let o = new n(Promise.resolve(e));
        return (o.data = e), (o.loaded = !0), o;
      }
      onLoad(e) {
        return (
          this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e),
          this
        );
      }
      onError(e) {
        return (
          this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e),
          this
        );
      }
      onFinish(e) {
        return this.loaded ? e() : this.onFinishEvents.add(e), this;
      }
      then(e) {
        return this.onLoad(e);
      }
      catch(e) {
        return this.onError(e);
      }
      finally(e) {
        return this.onFinish(e);
      }
    },
    ke = class {
      static {
        i(this, "AssetBucket");
      }
      assets = new Map();
      lastUID = 0;
      add(e, o) {
        let h = e ?? this.lastUID++ + "",
          m = new ve(o);
        return this.assets.set(h, m), m;
      }
      addLoaded(e, o) {
        let h = e ?? this.lastUID++ + "",
          m = ve.loaded(o);
        return this.assets.set(h, m), m;
      }
      get(e) {
        return this.assets.get(e);
      }
      progress() {
        if (this.assets.size === 0) return 1;
        let e = 0;
        return (
          this.assets.forEach((o) => {
            o.loaded && e++;
          }),
          e / this.assets.size
        );
      }
    },
    Fr = i(() => {
      let n = { urlPrefix: "", loaded: !1 };
      function e(F) {
        n.urlPrefix = F;
      }
      i(e, "setURLPrefix");
      function o() {
        return n.urlPrefix;
      }
      i(o, "getURLPrefix");
      function h(F) {
        let v = n.urlPrefix + F;
        return fetch(v).then((z) => {
          if (!z.ok) throw new Error(`Failed to fetch "${v}"`);
          return z;
        });
      }
      i(h, "fetchURL");
      function m(F) {
        return h(F).then((v) => v.json());
      }
      i(m, "fetchJSON");
      function p(F) {
        return h(F).then((v) => v.text());
      }
      i(p, "fetchText");
      function R(F) {
        return h(F).then((v) => v.arrayBuffer());
      }
      i(R, "fetchArrayBuffer");
      function I(F) {
        let v = new Image();
        return (
          (v.crossOrigin = "anonymous"),
          (v.src = Xt(F) ? F : n.urlPrefix + F),
          new Promise((z, S) => {
            (v.onload = () => z(v)),
              (v.onerror = () =>
                S(new Error(`Failed to load image from "${F}"`)));
          })
        );
      }
      return (
        i(I, "loadImg"),
        {
          setURLPrefix: e,
          getURLPrefix: o,
          loadImg: I,
          fetchURL: h,
          fetchJSON: m,
          fetchText: p,
          fetchArrayBuffer: R,
        }
      );
    }, "default");
  var Zt = 2.5949095,
    Ir = 1.70158 + 1,
    Lr = (2 * Math.PI) / 3,
    Vr = (2 * Math.PI) / 4.5,
    en = {
      linear: (n) => n,
      easeInSine: (n) => 1 - Math.cos((n * Math.PI) / 2),
      easeOutSine: (n) => Math.sin((n * Math.PI) / 2),
      easeInOutSine: (n) => -(Math.cos(Math.PI * n) - 1) / 2,
      easeInQuad: (n) => n * n,
      easeOutQuad: (n) => 1 - (1 - n) * (1 - n),
      easeInOutQuad: (n) =>
        n < 0.5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2,
      easeInCubic: (n) => n * n * n,
      easeOutCubic: (n) => 1 - Math.pow(1 - n, 3),
      easeInOutCubic: (n) =>
        n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2,
      easeInQuart: (n) => n * n * n * n,
      easeOutQuart: (n) => 1 - Math.pow(1 - n, 4),
      easeInOutQuart: (n) =>
        n < 0.5 ? 8 * n * n * n * n : 1 - Math.pow(-2 * n + 2, 4) / 2,
      easeInQuint: (n) => n * n * n * n * n,
      easeOutQuint: (n) => 1 - Math.pow(1 - n, 5),
      easeInOutQuint: (n) =>
        n < 0.5 ? 16 * n * n * n * n * n : 1 - Math.pow(-2 * n + 2, 5) / 2,
      easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * n - 10)),
      easeOutExpo: (n) => (n === 1 ? 1 : 1 - Math.pow(2, -10 * n)),
      easeInOutExpo: (n) =>
        n === 0
          ? 0
          : n === 1
          ? 1
          : n < 0.5
          ? Math.pow(2, 20 * n - 10) / 2
          : (2 - Math.pow(2, -20 * n + 10)) / 2,
      easeInCirc: (n) => 1 - Math.sqrt(1 - Math.pow(n, 2)),
      easeOutCirc: (n) => Math.sqrt(1 - Math.pow(n - 1, 2)),
      easeInOutCirc: (n) =>
        n < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * n, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * n + 2, 2)) + 1) / 2,
      easeInBack: (n) => Ir * n * n * n - 1.70158 * n * n,
      easeOutBack: (n) =>
        1 + Ir * Math.pow(n - 1, 3) + 1.70158 * Math.pow(n - 1, 2),
      easeInOutBack: (n) =>
        n < 0.5
          ? (Math.pow(2 * n, 2) * ((Zt + 1) * 2 * n - Zt)) / 2
          : (Math.pow(2 * n - 2, 2) * ((Zt + 1) * (n * 2 - 2) + Zt) + 2) / 2,
      easeInElastic: (n) =>
        n === 0
          ? 0
          : n === 1
          ? 1
          : -Math.pow(2, 10 * n - 10) * Math.sin((n * 10 - 10.75) * Lr),
      easeOutElastic: (n) =>
        n === 0
          ? 0
          : n === 1
          ? 1
          : Math.pow(2, -10 * n) * Math.sin((n * 10 - 0.75) * Lr) + 1,
      easeInOutElastic: (n) =>
        n === 0
          ? 0
          : n === 1
          ? 1
          : n < 0.5
          ? -(Math.pow(2, 20 * n - 10) * Math.sin((20 * n - 11.125) * Vr)) / 2
          : (Math.pow(2, -20 * n + 10) * Math.sin((20 * n - 11.125) * Vr)) / 2 +
            1,
      easeInBounce: (n) => 1 - en.easeOutBounce(1 - n),
      easeOutBounce: (n) =>
        n < 1 / 2.75
          ? 7.5625 * n * n
          : n < 2 / 2.75
          ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
          : n < 2.5 / 2.75
          ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
          : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375,
      easeInOutBounce: (n) =>
        n < 0.5
          ? (1 - en.easeOutBounce(1 - 2 * n)) / 2
          : (1 + en.easeOutBounce(2 * n - 1)) / 2,
    },
    Et = en;
  var St = class {
    static {
      i(this, "TexPacker");
    }
    textures = [];
    canvas;
    c2d;
    x = 0;
    y = 0;
    curHeight = 0;
    gfx;
    constructor(e, o, h) {
      (this.gfx = e),
        (this.canvas = document.createElement("canvas")),
        (this.canvas.width = o),
        (this.canvas.height = h),
        (this.textures = [Re.fromImage(e, this.canvas)]),
        (this.c2d = this.canvas.getContext("2d"));
    }
    add(e) {
      if (e.width > this.canvas.width || e.height > this.canvas.height)
        throw new Error(
          `Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`
        );
      this.x + e.width > this.canvas.width &&
        ((this.x = 0), (this.y += this.curHeight), (this.curHeight = 0)),
        this.y + e.height > this.canvas.height &&
          (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height),
          this.textures.push(Re.fromImage(this.gfx, this.canvas)),
          (this.x = 0),
          (this.y = 0),
          (this.curHeight = 0));
      let o = this.textures[this.textures.length - 1],
        h = new y(this.x, this.y);
      return (
        (this.x += e.width),
        e.height > this.curHeight && (this.curHeight = e.height),
        e instanceof ImageData
          ? this.c2d.putImageData(e, h.x, h.y)
          : this.c2d.drawImage(e, h.x, h.y),
        o.update(this.canvas),
        [
          o,
          new ae(
            h.x / this.canvas.width,
            h.y / this.canvas.height,
            e.width / this.canvas.width,
            e.height / this.canvas.height
          ),
        ]
      );
    }
    free() {
      for (let e of this.textures) e.free();
    }
  };
  var _r =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var kr = mr(
    "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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
  );
  var Nr =
    "data:image/png;base64,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";
  var jr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
  var ji = "3000.1.14",
    Hr =
      " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    tn = "topleft",
    qr = 64,
    Hi = "monospace",
    nn = "monospace",
    qi = 32,
    rn = 64,
    sn = 256,
    $r = 2048,
    zr = 2048,
    Kr = 2048,
    Yr = 2048,
    Wr = 0.1,
    $i = 64,
    Yn = "linear",
    zi = 8,
    Ki = 4,
    Jn = [
      { name: "a_pos", size: 2 },
      { name: "a_uv", size: 2 },
      { name: "a_color", size: 4 },
    ],
    Yi = Jn.reduce((n, e) => n + e.size, 0),
    Xr = 2048,
    Wi = Xr * 4 * Yi,
    Xi = Xr * 6,
    Ji = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`,
    Qi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`,
    Wn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`,
    Xn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`,
    Zi = new Set(["id", "require"]),
    eo = new Set([
      "add",
      "update",
      "draw",
      "destroy",
      "inspect",
      "drawInspect",
    ]);
  function ct(n) {
    switch (n) {
      case "topleft":
        return new y(-1, -1);
      case "top":
        return new y(0, -1);
      case "topright":
        return new y(1, -1);
      case "left":
        return new y(-1, 0);
      case "center":
        return new y(0, 0);
      case "right":
        return new y(1, 0);
      case "botleft":
        return new y(-1, 1);
      case "bot":
        return new y(0, 1);
      case "botright":
        return new y(1, 1);
      default:
        return n;
    }
  }
  i(ct, "anchorPt");
  function to(n) {
    switch (n) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  i(to, "alignPt");
  function no(n) {
    return n.createBuffer(1, 1, 44100);
  }
  i(no, "createEmptyAudioBuffer");
  var ro = i((n = {}) => {
    let e = n.root ?? document.body;
    e === document.body &&
      ((document.body.style.width = "100%"),
      (document.body.style.height = "100%"),
      (document.body.style.margin = "0px"),
      (document.documentElement.style.width = "100%"),
      (document.documentElement.style.height = "100%"));
    let o =
        n.canvas ??
        (() => {
          let t = document.createElement("canvas");
          return e.appendChild(t), t;
        })(),
      h = n.scale ?? 1,
      m = n.width && n.height && !n.stretch && !n.letterbox;
    m
      ? ((o.width = n.width * h), (o.height = n.height * h))
      : ((o.width = o.parentElement.offsetWidth),
        (o.height = o.parentElement.offsetHeight));
    let p = ["outline: none", "cursor: default"];
    if (m) {
      let t = o.width,
        r = o.height;
      p.push(`width: ${t}px`), p.push(`height: ${r}px`);
    } else p.push("width: 100%"), p.push("height: 100%");
    n.crisp &&
      (p.push("image-rendering: pixelated"),
      p.push("image-rendering: crisp-edges")),
      (o.style.cssText = p.join(";"));
    let R = n.pixelDensity || window.devicePixelRatio;
    (o.width *= R), (o.height *= R), (o.tabIndex = 0);
    let I = document.createElement("canvas");
    (I.width = sn), (I.height = sn);
    let F = I.getContext("2d", { willReadFrequently: !0 }),
      v = Br({
        canvas: o,
        touchToMouse: n.touchToMouse,
        gamepads: n.gamepads,
        pixelDensity: n.pixelDensity,
        maxFPS: n.maxFPS,
      }),
      z = [],
      S = v
        .canvas()
        .getContext("webgl", {
          antialias: !0,
          depth: !0,
          stencil: !0,
          alpha: !0,
          preserveDrawingBuffer: !0,
        }),
      $ = Kn(S, { texFilter: n.texFilter }),
      ie = Fr(),
      U = (() => {
        let t = lt(Wn, Xn),
          r = Re.fromImage(
            $,
            new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)
          ),
          s =
            n.width && n.height
              ? new rt($, n.width * R * h, n.height * R * h)
              : new rt($, S.drawingBufferWidth, S.drawingBufferHeight),
          a = null,
          u = 1;
        n.background &&
          ((a = Y.fromArray(n.background)),
          (u = n.background[3] ?? 1),
          S.clearColor(a.r / 255, a.g / 255, a.b / 255, u)),
          S.enable(S.BLEND),
          S.blendFuncSeparate(
            S.SRC_ALPHA,
            S.ONE_MINUS_SRC_ALPHA,
            S.ONE,
            S.ONE_MINUS_SRC_ALPHA
          );
        let c = new Qt($, Jn, Wi, Xi),
          f = Re.fromImage(
            $,
            new ImageData(
              new Uint8ClampedArray([
                128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128,
                128, 128, 255,
              ]),
              2,
              2
            ),
            { wrap: "repeat", filter: "nearest" }
          );
        return {
          lastDrawCalls: 0,
          defShader: t,
          defTex: r,
          frameBuffer: s,
          postShader: null,
          postShaderUniform: null,
          renderer: c,
          transform: new Ue(),
          transformStack: [],
          bgTex: f,
          bgColor: a,
          bgAlpha: u,
          width: n.width ?? S.drawingBufferWidth / R / h,
          height: n.height ?? S.drawingBufferHeight / R / h,
          viewport: {
            x: 0,
            y: 0,
            width: S.drawingBufferWidth,
            height: S.drawingBufferHeight,
          },
          fixed: !1,
        };
      })();
    class W {
      static {
        i(this, "SpriteData");
      }
      tex;
      frames = [new ae(0, 0, 1, 1)];
      anims = {};
      slice9 = null;
      constructor(r, s, a = {}, u = null) {
        (this.tex = r),
          s && (this.frames = s),
          (this.anims = a),
          (this.slice9 = u);
      }
      get width() {
        return this.tex.width * this.frames[0].w;
      }
      get height() {
        return this.tex.height * this.frames[0].h;
      }
      static from(r, s = {}) {
        return typeof r == "string"
          ? W.fromURL(r, s)
          : Promise.resolve(W.fromImage(r, s));
      }
      static fromImage(r, s = {}) {
        let [a, u] = j.packer.add(r),
          c = s.frames
            ? s.frames.map(
                (f) =>
                  new ae(u.x + f.x * u.w, u.y + f.y * u.h, f.w * u.w, f.h * u.h)
              )
            : Ct(s.sliceX || 1, s.sliceY || 1, u.x, u.y, u.w, u.h);
        return new W(a, c, s.anims, s.slice9);
      }
      static fromURL(r, s = {}) {
        return ie.loadImg(r).then((a) => W.fromImage(a, s));
      }
    }
    class de {
      static {
        i(this, "SoundData");
      }
      buf;
      constructor(r) {
        this.buf = r;
      }
      static fromArrayBuffer(r) {
        return new Promise((s, a) => ne.ctx.decodeAudioData(r, s, a)).then(
          (s) => new de(s)
        );
      }
      static fromURL(r) {
        return Xt(r)
          ? de.fromArrayBuffer(Or(r))
          : ie.fetchArrayBuffer(r).then((s) => de.fromArrayBuffer(s));
      }
    }
    let ne = (() => {
        let t = new (window.AudioContext || window.webkitAudioContext)(),
          r = t.createGain();
        r.connect(t.destination);
        let s = new de(no(t));
        return (
          t
            .decodeAudioData(kr.buffer.slice(0))
            .then((a) => {
              s.buf = a;
            })
            .catch((a) => {
              console.error("Failed to load burp: ", a);
            }),
          { ctx: t, masterNode: r, burpSnd: s }
        );
      })(),
      j = {
        sprites: new ke(),
        fonts: new ke(),
        bitmapFonts: new ke(),
        sounds: new ke(),
        shaders: new ke(),
        custom: new ke(),
        packer: new St($, Kr, Yr),
        loaded: !1,
      },
      C = {
        events: new _e(),
        objEvents: new _e(),
        root: En([]),
        gravity: 0,
        scenes: {},
        logs: [],
        cam: {
          pos: null,
          scale: new y(1),
          angle: 0,
          shake: 0,
          transform: new Ue(),
        },
      };
    C.root.use(An());
    function Te(t) {
      return j.custom.add(null, t);
    }
    i(Te, "load");
    function q() {
      let t = [
        j.sprites,
        j.sounds,
        j.shaders,
        j.fonts,
        j.bitmapFonts,
        j.custom,
      ];
      return t.reduce((r, s) => r + s.progress(), 0) / t.length;
    }
    i(q, "loadProgress");
    function Ae(t) {
      return t !== void 0 && ie.setURLPrefix(t), ie.getURLPrefix();
    }
    i(Ae, "loadRoot");
    function ye(t, r) {
      return j.custom.add(t, ie.fetchJSON(r));
    }
    i(ye, "loadJSON");
    class Se {
      static {
        i(this, "FontData");
      }
      fontface;
      filter = Yn;
      outline = null;
      size = rn;
      constructor(r, s = {}) {
        if (
          ((this.fontface = r),
          (this.filter = s.filter ?? Yn),
          (this.size = s.size ?? rn),
          this.size > sn)
        )
          throw new Error(`Max font size: ${sn}`);
        s.outline &&
          ((this.outline = { width: 1, color: ee(0, 0, 0) }),
          typeof s.outline == "number"
            ? (this.outline.width = s.outline)
            : typeof s.outline == "object" &&
              (s.outline.width && (this.outline.width = s.outline.width),
              s.outline.color && (this.outline.color = s.outline.color)));
      }
    }
    function st(t, r, s = {}) {
      let a = new FontFace(t, typeof r == "string" ? `url(${r})` : r);
      return (
        document.fonts.add(a),
        j.fonts.add(
          t,
          a
            .load()
            .catch((u) => {
              throw new Error(`Failed to load font from "${r}": ${u}`);
            })
            .then((u) => new Se(u, s))
        )
      );
    }
    i(st, "loadFont");
    function on(t, r, s, a, u = {}) {
      return j.bitmapFonts.add(
        t,
        ie
          .loadImg(r)
          .then((c) => bn(Re.fromImage($, c, u), s, a, u.chars ?? Hr))
      );
    }
    i(on, "loadBitmapFont");
    function Ct(t = 1, r = 1, s = 0, a = 0, u = 1, c = 1) {
      let f = [],
        b = u / t,
        g = c / r;
      for (let l = 0; l < r; l++)
        for (let w = 0; w < t; w++) f.push(new ae(s + w * b, a + l * g, b, g));
      return f;
    }
    i(Ct, "slice");
    function Tt(t, r) {
      return Te(
        typeof r == "string"
          ? new Promise((s, a) => {
              ie.fetchJSON(r).then((u) => {
                Tt(t, u).then(s).catch(a);
              });
            })
          : W.from(t).then((s) => {
              let a = {};
              for (let u in r) {
                let c = r[u],
                  f = s.frames[0],
                  b = Kr * f.w,
                  g = Yr * f.h,
                  l = c.frames
                    ? c.frames.map(
                        (A) =>
                          new ae(
                            f.x + ((c.x + A.x) / b) * f.w,
                            f.y + ((c.y + A.y) / g) * f.h,
                            (A.w / b) * f.w,
                            (A.h / g) * f.h
                          )
                      )
                    : Ct(
                        c.sliceX || 1,
                        c.sliceY || 1,
                        f.x + (c.x / b) * f.w,
                        f.y + (c.y / g) * f.h,
                        (c.width / b) * f.w,
                        (c.height / g) * f.h
                      ),
                  w = new W(s.tex, l, c.anims);
                j.sprites.addLoaded(u, w), (a[u] = w);
              }
              return a;
            })
      );
    }
    i(Tt, "loadSpriteAtlas");
    function At(t, r = {}) {
      let s = document.createElement("canvas"),
        a = t[0].width,
        u = t[0].height;
      (s.width = a * t.length), (s.height = u);
      let c = s.getContext("2d");
      t.forEach((b, g) => {
        b instanceof ImageData
          ? c.putImageData(b, g * a, 0)
          : c.drawImage(b, g * a, 0);
      });
      let f = c.getImageData(0, 0, t.length * a, u);
      return W.fromImage(f, { ...r, sliceX: t.length, sliceY: 1 });
    }
    i(At, "createSpriteSheet");
    function Ke(t, r, s = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(r)
        ? r.some((a) => typeof a == "string")
          ? j.sprites.add(
              t,
              Promise.all(
                r.map((a) =>
                  typeof a == "string" ? ie.loadImg(a) : Promise.resolve(a)
                )
              ).then((a) => At(a, s))
            )
          : j.sprites.addLoaded(t, At(r, s))
        : typeof r == "string"
        ? j.sprites.add(t, W.from(r, s))
        : j.sprites.addLoaded(t, W.fromImage(r, s));
    }
    i(Ke, "loadSprite");
    function an(t, r) {
      return j.sprites.add(
        t,
        new Promise(async (s) => {
          let a = typeof r == "string" ? await ie.fetchJSON(r) : r,
            u = await Promise.all(a.frames.map(ie.loadImg)),
            c = document.createElement("canvas");
          (c.width = a.width), (c.height = a.height * a.frames.length);
          let f = c.getContext("2d");
          u.forEach((g, l) => {
            f.drawImage(g, 0, l * a.height);
          });
          let b = await Ke(null, c, {
            sliceY: a.frames.length,
            anims: a.anims,
          });
          s(b);
        })
      );
    }
    i(an, "loadPedit");
    function un(t, r, s) {
      typeof r == "string" &&
        !s &&
        (s = r.replace(new RegExp(`${Pr(r)}$`), "json"));
      let a = typeof s == "string" ? ie.fetchJSON(s) : Promise.resolve(s);
      return j.sprites.add(
        t,
        a.then((u) => {
          let c = u.meta.size,
            f = u.frames.map(
              (g) =>
                new ae(
                  g.frame.x / c.w,
                  g.frame.y / c.h,
                  g.frame.w / c.w,
                  g.frame.h / c.h
                )
            ),
            b = {};
          for (let g of u.meta.frameTags)
            g.from === g.to
              ? (b[g.name] = g.from)
              : (b[g.name] = {
                  from: g.from,
                  to: g.to,
                  speed: 10,
                  loop: !0,
                  pingpong: g.direction === "pingpong",
                });
          return W.from(r, { frames: f, anims: b });
        })
      );
    }
    i(un, "loadAseprite");
    function cn(t, r, s) {
      return j.shaders.addLoaded(t, lt(r, s));
    }
    i(cn, "loadShader");
    function hn(t, r, s) {
      let a = i(
          (c) => (c ? ie.fetchText(c) : Promise.resolve(null)),
          "resolveUrl"
        ),
        u = Promise.all([a(r), a(s)]).then(([c, f]) => lt(c, f));
      return j.shaders.add(t, u);
    }
    i(hn, "loadShaderURL");
    function ln(t, r) {
      return j.sounds.add(
        t,
        typeof r == "string" ? de.fromURL(r) : de.fromArrayBuffer(r)
      );
    }
    i(ln, "loadSound");
    function dn(t = "bean") {
      return Ke(t, _r);
    }
    i(dn, "loadBean");
    function Ot(t) {
      return j.sprites.get(t);
    }
    i(Ot, "getSprite");
    function Rt(t) {
      return j.sounds.get(t);
    }
    i(Rt, "getSound");
    function Pt(t) {
      return j.fonts.get(t);
    }
    i(Pt, "getFont");
    function Dt(t) {
      return j.bitmapFonts.get(t);
    }
    i(Dt, "getBitmapFont");
    function Mt(t) {
      return j.shaders.get(t);
    }
    i(Mt, "getShader");
    function fn(t) {
      return j.custom.get(t);
    }
    i(fn, "getAsset");
    function ht(t) {
      if (typeof t == "string") {
        let r = Ot(t);
        if (r) return r;
        if (q() < 1) return null;
        throw new Error(`Sprite not found: ${t}`);
      } else {
        if (t instanceof W) return ve.loaded(t);
        if (t instanceof ve) return t;
        throw new Error(`Invalid sprite: ${t}`);
      }
    }
    i(ht, "resolveSprite");
    function mn(t) {
      if (typeof t == "string") {
        let r = Rt(t);
        if (r) return r;
        if (q() < 1) return null;
        throw new Error(`Sound not found: ${t}`);
      } else {
        if (t instanceof de) return ve.loaded(t);
        if (t instanceof ve) return t;
        throw new Error(`Invalid sound: ${t}`);
      }
    }
    i(mn, "resolveSound");
    function pn(t) {
      if (!t) return U.defShader;
      if (typeof t == "string") {
        let r = Mt(t);
        if (r) return r.data ?? r;
        if (q() < 1) return null;
        throw new Error(`Shader not found: ${t}`);
      } else if (t instanceof ve) return t.data ? t.data : t;
      return t;
    }
    i(pn, "resolveShader");
    function Gt(t) {
      if (!t) return Gt(n.font ?? Hi);
      if (typeof t == "string") {
        let r = Dt(t),
          s = Pt(t);
        if (r) return r.data ?? r;
        if (s) return s.data ?? s;
        if (document.fonts.check(`${rn}px ${t}`)) return t;
        if (q() < 1) return null;
        throw new Error(`Font not found: ${t}`);
      } else if (t instanceof ve) return t.data ? t.data : t;
      return t;
    }
    i(Gt, "resolveFont");
    function gn(t) {
      return (
        t !== void 0 && (ne.masterNode.gain.value = t), ne.masterNode.gain.value
      );
    }
    i(gn, "volume");
    function Bt(t, r = {}) {
      let s = ne.ctx,
        a = r.paused ?? !1,
        u = s.createBufferSource(),
        c = new be(),
        f = s.createGain(),
        b = r.seek ?? 0,
        g = 0,
        l = 0,
        w = !1;
      (u.loop = !!r.loop),
        (u.detune.value = r.detune ?? 0),
        (u.playbackRate.value = r.speed ?? 1),
        u.connect(f),
        (u.onended = () => {
          N() >= u.buffer?.duration && c.trigger();
        }),
        f.connect(ne.masterNode),
        (f.gain.value = r.volume ?? 1);
      let A = i((M) => {
          (u.buffer = M.buf),
            a || ((g = s.currentTime), u.start(0, b), (w = !0));
        }, "start"),
        D = mn(t);
      D instanceof ve && D.onLoad(A);
      let N = i(() => {
          if (!u.buffer) return 0;
          let M = a ? l - g : s.currentTime - g,
            P = u.buffer.duration;
          return u.loop ? M % P : Math.min(M, P);
        }, "getTime"),
        _ = i((M) => {
          let P = s.createBufferSource();
          return (
            (P.buffer = M.buffer),
            (P.loop = M.loop),
            (P.playbackRate.value = M.playbackRate.value),
            (P.detune.value = M.detune.value),
            (P.onended = M.onended),
            P.connect(f),
            P
          );
        }, "cloneNode");
      return {
        stop() {
          (this.paused = !0), this.seek(0);
        },
        set paused(M) {
          if (a !== M)
            if (((a = M), M)) w && (u.stop(), (w = !1)), (l = s.currentTime);
            else {
              u = _(u);
              let P = l - g;
              u.start(0, P), (w = !0), (g = s.currentTime - P), (l = 0);
            }
        },
        get paused() {
          return a;
        },
        play(M = 0) {
          this.seek(M), (this.paused = !1);
        },
        seek(M) {
          u.buffer?.duration &&
            (M > u.buffer.duration ||
              (a
                ? ((u = _(u)), (g = l - M))
                : (u.stop(),
                  (u = _(u)),
                  (g = s.currentTime - M),
                  u.start(0, M),
                  (w = !0),
                  (l = 0))));
        },
        set speed(M) {
          u.playbackRate.value = M;
        },
        get speed() {
          return u.playbackRate.value;
        },
        set detune(M) {
          u.detune.value = M;
        },
        get detune() {
          return u.detune.value;
        },
        set volume(M) {
          f.gain.value = Math.max(M, 0);
        },
        get volume() {
          return f.gain.value;
        },
        set loop(M) {
          u.loop = M;
        },
        get loop() {
          return u.loop;
        },
        duration() {
          return u.buffer?.duration ?? 0;
        },
        time() {
          return N() % this.duration();
        },
        onEnd(M) {
          return c.add(M);
        },
        then(M) {
          return this.onEnd(M);
        },
      };
    }
    i(Bt, "play");
    function Ft(t) {
      return Bt(ne.burpSnd, t);
    }
    i(Ft, "burp");
    function wn(t, r) {
      return new rt($, t, r);
    }
    i(wn, "makeCanvas");
    function lt(t = Wn, r = Xn) {
      let s = Ji.replace("{{user}}", t ?? Wn),
        a = Qi.replace("{{user}}", r ?? Xn);
      try {
        return new Jt(
          $,
          s,
          a,
          Jn.map((u) => u.name)
        );
      } catch (u) {
        let f = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/,
          b = Mr(u).match(f),
          g = Number(b.groups.line) - 14,
          l = b.groups.msg.trim(),
          w = b.groups.type.toLowerCase();
        throw new Error(`${w} shader line ${g}: ${l}`);
      }
    }
    i(lt, "makeShader");
    function bn(t, r, s, a) {
      let u = t.width / r,
        c = {},
        f = a.split("").entries();
      for (let [b, g] of f)
        c[g] = new ae((b % u) * r, Math.floor(b / u) * s, r, s);
      return { tex: t, map: c, size: s };
    }
    i(bn, "makeFont");
    function dt(t, r, s, a = U.defTex, u = U.defShader, c = {}) {
      let f = pn(u);
      if (!f || f instanceof ve) return;
      let b = U.fixed || s ? U.transform : C.cam.transform.mult(U.transform),
        g = [];
      for (let l of t) {
        let w = yn(b.multVec2(l.pos));
        g.push(
          w.x,
          w.y,
          l.uv.x,
          l.uv.y,
          l.color.r / 255,
          l.color.g / 255,
          l.color.b / 255,
          l.opacity
        );
      }
      U.renderer.push(S.TRIANGLES, g, r, f, a, c);
    }
    i(dt, "drawRaw");
    function Pe() {
      U.renderer.flush();
    }
    i(Pe, "flush");
    function It() {
      S.clear(S.COLOR_BUFFER_BIT),
        U.frameBuffer.bind(),
        S.clear(S.COLOR_BUFFER_BIT),
        U.bgColor ||
          pe(() => {
            Ce({
              width: we(),
              height: xe(),
              quad: new ae(0, 0, we() / qr, xe() / qr),
              tex: U.bgTex,
              fixed: !0,
            });
          }),
        (U.renderer.numDraws = 0),
        (U.fixed = !1),
        (U.transformStack.length = 0),
        (U.transform = new Ue());
    }
    i(It, "frameStart");
    function vn(t, r) {
      (U.postShader = t), (U.postShaderUniform = r ?? null);
    }
    i(vn, "usePostEffect");
    function ft() {
      Pe(),
        (U.lastDrawCalls = U.renderer.numDraws),
        U.frameBuffer.unbind(),
        S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
      let t = U.width,
        r = U.height;
      (U.width = S.drawingBufferWidth / R),
        (U.height = S.drawingBufferHeight / R),
        Ye({
          flipY: !0,
          tex: U.frameBuffer.tex,
          pos: new y(U.viewport.x, U.viewport.y),
          width: U.viewport.width,
          height: U.viewport.height,
          shader: U.postShader,
          uniform:
            typeof U.postShaderUniform == "function"
              ? U.postShaderUniform()
              : U.postShaderUniform,
          fixed: !0,
        }),
        Pe(),
        (U.width = t),
        (U.height = r);
    }
    i(ft, "frameEnd");
    function yn(t) {
      return new y((t.x / we()) * 2 - 1, (-t.y / xe()) * 2 + 1);
    }
    i(yn, "screen2ndc");
    function xn(t) {
      U.transform = t.clone();
    }
    i(xn, "pushMatrix");
    function re(...t) {
      if (t[0] === void 0) return;
      let r = T(...t);
      (r.x === 0 && r.y === 0) || U.transform.translate(r);
    }
    i(re, "pushTranslate");
    function Ne(...t) {
      if (t[0] === void 0) return;
      let r = T(...t);
      (r.x === 1 && r.y === 1) || U.transform.scale(r);
    }
    i(Ne, "pushScale");
    function je(t) {
      t && U.transform.rotate(t);
    }
    i(je, "pushRotate");
    function X() {
      U.transformStack.push(U.transform.clone());
    }
    i(X, "pushTransform");
    function he() {
      U.transformStack.length > 0 && (U.transform = U.transformStack.pop());
    }
    i(he, "popTransform");
    function Ce(t) {
      if (t.width === void 0 || t.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0) return;
      let r = t.width,
        s = t.height,
        u = ct(t.anchor || tn).scale(new y(r, s).scale(-0.5)),
        c = t.quad || new ae(0, 0, 1, 1),
        f = t.color || ee(255, 255, 255),
        b = t.opacity ?? 1,
        g = t.tex ? Wr / t.tex.width : 0,
        l = t.tex ? Wr / t.tex.height : 0,
        w = c.x + g,
        A = c.y + l,
        D = c.w - g * 2,
        N = c.h - l * 2;
      X(),
        re(t.pos),
        je(t.angle),
        Ne(t.scale),
        re(u),
        dt(
          [
            {
              pos: new y(-r / 2, s / 2),
              uv: new y(t.flipX ? w + D : w, t.flipY ? A : A + N),
              color: f,
              opacity: b,
            },
            {
              pos: new y(-r / 2, -s / 2),
              uv: new y(t.flipX ? w + D : w, t.flipY ? A + N : A),
              color: f,
              opacity: b,
            },
            {
              pos: new y(r / 2, -s / 2),
              uv: new y(t.flipX ? w : w + D, t.flipY ? A + N : A),
              color: f,
              opacity: b,
            },
            {
              pos: new y(r / 2, s / 2),
              uv: new y(t.flipX ? w : w + D, t.flipY ? A : A + N),
              color: f,
              opacity: b,
            },
          ],
          [0, 1, 3, 1, 2, 3],
          t.fixed,
          t.tex,
          t.shader,
          t.uniform
        ),
        he();
    }
    i(Ce, "drawUVQuad");
    function Ye(t) {
      if (!t.tex) throw new Error('drawTexture() requires property "tex".');
      let r = t.quad ?? new ae(0, 0, 1, 1),
        s = t.tex.width * r.w,
        a = t.tex.height * r.h,
        u = new y(1);
      if (t.tiled) {
        let c = Math.ceil((t.width || s) / s),
          f = Math.ceil((t.height || a) / a),
          g = ct(t.anchor || tn)
            .add(new y(1, 1))
            .scale(0.5)
            .scale(c * s, f * a);
        for (let l = 0; l < c; l++)
          for (let w = 0; w < f; w++)
            Ce(
              Object.assign({}, t, {
                pos: (t.pos || new y(0)).add(new y(s * l, a * w)).sub(g),
                scale: u.scale(t.scale || new y(1)),
                tex: t.tex,
                quad: r,
                width: s,
                height: a,
                anchor: "topleft",
              })
            );
      } else
        t.width && t.height
          ? ((u.x = t.width / s), (u.y = t.height / a))
          : t.width
          ? ((u.x = t.width / s), (u.y = u.x))
          : t.height && ((u.y = t.height / a), (u.x = u.y)),
          Ce(
            Object.assign({}, t, {
              scale: u.scale(t.scale || new y(1)),
              tex: t.tex,
              quad: r,
              width: s,
              height: a,
            })
          );
    }
    i(Ye, "drawTexture");
    function Lt(t) {
      if (!t.sprite) throw new Error('drawSprite() requires property "sprite"');
      let r = ht(t.sprite);
      if (!r || !r.data) return;
      let s = r.data.frames[t.frame ?? 0];
      if (!s) throw new Error(`Frame not found: ${t.frame ?? 0}`);
      Ye(
        Object.assign({}, t, {
          tex: r.data.tex,
          quad: s.scale(t.quad ?? new ae(0, 0, 1, 1)),
        })
      );
    }
    i(Lt, "drawSprite");
    function We(t, r, s, a, u, c = 1) {
      (a = Me(a % 360)), (u = Me(u % 360)), u <= a && (u += Math.PI * 2);
      let f = [],
        b = Math.ceil(((u - a) / Me(8)) * c),
        g = (u - a) / b;
      for (let l = a; l < u; l += g)
        f.push(t.add(r * Math.cos(l), s * Math.sin(l)));
      return f.push(t.add(r * Math.cos(u), s * Math.sin(u))), f;
    }
    i(We, "getArcPts");
    function ge(t) {
      if (t.width === void 0 || t.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0) return;
      let r = t.width,
        s = t.height,
        u = ct(t.anchor || tn)
          .add(1, 1)
          .scale(new y(r, s).scale(-0.5)),
        c = [new y(0, 0), new y(r, 0), new y(r, s), new y(0, s)];
      if (t.radius) {
        let f = Math.min(Math.min(r, s) / 2, t.radius);
        c = [
          new y(f, 0),
          new y(r - f, 0),
          ...We(new y(r - f, f), f, f, 270, 360),
          new y(r, f),
          new y(r, s - f),
          ...We(new y(r - f, s - f), f, f, 0, 90),
          new y(r - f, s),
          new y(f, s),
          ...We(new y(f, s - f), f, f, 90, 180),
          new y(0, s - f),
          new y(0, f),
          ...We(new y(f, f), f, f, 180, 270),
        ];
      }
      te(
        Object.assign({}, t, {
          offset: u,
          pts: c,
          ...(t.gradient
            ? {
                colors: t.horizontal
                  ? [t.gradient[0], t.gradient[1], t.gradient[1], t.gradient[0]]
                  : [
                      t.gradient[0],
                      t.gradient[0],
                      t.gradient[1],
                      t.gradient[1],
                    ],
              }
            : {}),
        })
      );
    }
    i(ge, "drawRect");
    function He(t) {
      let { p1: r, p2: s } = t;
      if (!r || !s)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let a = t.width || 1,
        u = s
          .sub(r)
          .unit()
          .normal()
          .scale(a * 0.5),
        c = [r.sub(u), r.add(u), s.add(u), s.sub(u)].map((f) => ({
          pos: new y(f.x, f.y),
          uv: new y(0),
          color: t.color ?? Y.WHITE,
          opacity: t.opacity ?? 1,
        }));
      dt(c, [0, 1, 3, 1, 2, 3], t.fixed, U.defTex, t.shader, t.uniform);
    }
    i(He, "drawLine");
    function d(t) {
      let r = t.pts;
      if (!r) throw new Error('drawLines() requires property "pts".');
      if (!(r.length < 2))
        if (t.radius && r.length >= 3) {
          let s = r[0].sdist(r[1]);
          for (let u = 1; u < r.length - 1; u++)
            s = Math.min(r[u].sdist(r[u + 1]), s);
          let a = Math.min(t.radius, Math.sqrt(s) / 2);
          He(Object.assign({}, t, { p1: r[0], p2: r[1] }));
          for (let u = 1; u < r.length - 2; u++) {
            let c = r[u],
              f = r[u + 1];
            He(Object.assign({}, t, { p1: c, p2: f }));
          }
          He(
            Object.assign({}, t, { p1: r[r.length - 2], p2: r[r.length - 1] })
          );
        } else
          for (let s = 0; s < r.length - 1; s++)
            He(Object.assign({}, t, { p1: r[s], p2: r[s + 1] })),
              t.join !== "none" &&
                O(Object.assign({}, t, { pos: r[s], radius: t.width / 2 }));
    }
    i(d, "drawLines");
    function x(t) {
      if (!t.p1 || !t.p2 || !t.p3)
        throw new Error(
          'drawTriangle() requires properties "p1", "p2" and "p3".'
        );
      return te(Object.assign({}, t, { pts: [t.p1, t.p2, t.p3] }));
    }
    i(x, "drawTriangle");
    function O(t) {
      if (typeof t.radius != "number")
        throw new Error('drawCircle() requires property "radius".');
      t.radius !== 0 &&
        k(
          Object.assign({}, t, {
            radiusX: t.radius,
            radiusY: t.radius,
            angle: 0,
          })
        );
    }
    i(O, "drawCircle");
    function k(t) {
      if (t.radiusX === void 0 || t.radiusY === void 0)
        throw new Error(
          'drawEllipse() requires properties "radiusX" and "radiusY".'
        );
      if (t.radiusX === 0 || t.radiusY === 0) return;
      let r = t.start ?? 0,
        s = t.end ?? 360,
        a = ct(t.anchor ?? "center").scale(new y(-t.radiusX, -t.radiusY)),
        u = We(a, t.radiusX, t.radiusY, r, s, t.resolution);
      u.unshift(a);
      let c = Object.assign({}, t, {
        pts: u,
        radius: 0,
        ...(t.gradient
          ? {
              colors: [
                t.gradient[0],
                ...Array(u.length - 1).fill(t.gradient[1]),
              ],
            }
          : {}),
      });
      if (s - r >= 360 && t.outline) {
        t.fill !== !1 && te(Object.assign(c, { outline: null })),
          te(Object.assign(c, { pts: u.slice(1), fill: !1 }));
        return;
      }
      te(c);
    }
    i(k, "drawEllipse");
    function te(t) {
      if (!t.pts) throw new Error('drawPolygon() requires property "pts".');
      let r = t.pts.length;
      if (!(r < 3)) {
        if (
          (X(),
          re(t.pos),
          Ne(t.scale),
          je(t.angle),
          re(t.offset),
          t.fill !== !1)
        ) {
          let s = t.color ?? Y.WHITE,
            a = t.pts.map((c, f) => ({
              pos: new y(c.x, c.y),
              uv: new y(0, 0),
              color: t.colors && t.colors[f] ? t.colors[f].mult(s) : s,
              opacity: t.opacity ?? 1,
            })),
            u = [...Array(r - 2).keys()].map((c) => [0, c + 1, c + 2]).flat();
          dt(a, t.indices ?? u, t.fixed, U.defTex, t.shader, t.uniform);
        }
        t.outline &&
          d({
            pts: [...t.pts, t.pts[0]],
            radius: t.radius,
            width: t.outline.width,
            color: t.outline.color,
            join: t.outline.join,
            uniform: t.uniform,
            fixed: t.fixed,
            opacity: t.opacity,
          }),
          he();
      }
    }
    i(te, "drawPolygon");
    function J(t, r, s) {
      Pe(),
        S.clear(S.STENCIL_BUFFER_BIT),
        S.enable(S.STENCIL_TEST),
        S.stencilFunc(S.NEVER, 1, 255),
        S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE),
        r(),
        Pe(),
        S.stencilFunc(s, 1, 255),
        S.stencilOp(S.KEEP, S.KEEP, S.KEEP),
        t(),
        Pe(),
        S.disable(S.STENCIL_TEST);
    }
    i(J, "drawStenciled");
    function Oe(t, r) {
      J(t, r, S.EQUAL);
    }
    i(Oe, "drawMasked");
    function qe(t, r) {
      J(t, r, S.NOTEQUAL);
    }
    i(qe, "drawSubtracted");
    function Vt() {
      return (U.viewport.width + U.viewport.height) / (U.width + U.height);
    }
    i(Vt, "getViewportScale");
    function pe(t) {
      Pe();
      let r = U.width,
        s = U.height;
      (U.width = U.viewport.width),
        (U.height = U.viewport.height),
        t(),
        Pe(),
        (U.width = r),
        (U.height = s);
    }
    i(pe, "drawUnscaled");
    function it(t, r) {
      r.pos && (t.pos = t.pos.add(r.pos)),
        r.scale && (t.scale = t.scale.scale(T(r.scale))),
        r.angle && (t.angle += r.angle),
        r.color && t.ch.length === 1 && (t.color = t.color.mult(r.color)),
        r.opacity && (t.opacity *= r.opacity);
    }
    i(it, "applyCharTransform");
    let Qn = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
    function Jr(t) {
      let r = {},
        s = t.replace(Qn, "$2"),
        a = 0;
      for (let u of t.matchAll(Qn)) {
        let c = u.index - a;
        for (let f = 0; f < u.groups.text.length; f++)
          r[f + c] = [u.groups.style];
        a += u[0].length - u.groups.text.length;
      }
      return { charStyleMap: r, text: s };
    }
    i(Jr, "compileStyledText");
    let Un = {};
    function Xe(t) {
      if (t.text === void 0)
        throw new Error('formatText() requires property "text".');
      let r = Gt(t.font);
      if (t.text === "" || r instanceof ve || !r)
        return { width: 0, height: 0, chars: [], opt: t };
      let { charStyleMap: s, text: a } = Jr(t.text + ""),
        u = Gr(a);
      if (r instanceof Se || typeof r == "string") {
        let Q = r instanceof Se ? r.fontface.family : r,
          H =
            r instanceof Se
              ? { outline: r.outline, filter: r.filter }
              : { outline: null, filter: Yn },
          V = Un[Q] ?? {
            font: {
              tex: new Re($, $r, zr, { filter: H.filter }),
              map: {},
              size: rn,
            },
            cursor: new y(0),
            outline: H.outline,
          };
        Un[Q] || (Un[Q] = V), (r = V.font);
        for (let fe of u)
          if (!V.font.map[fe]) {
            let E = F;
            E.clearRect(0, 0, I.width, I.height),
              (E.font = `${r.size}px ${Q}`),
              (E.textBaseline = "top"),
              (E.textAlign = "left"),
              (E.fillStyle = "#ffffff");
            let G = E.measureText(fe),
              B = Math.ceil(G.width),
              L = r.size;
            V.outline &&
              ((E.lineJoin = "round"),
              (E.lineWidth = V.outline.width * 2),
              (E.strokeStyle = V.outline.color.toHex()),
              E.strokeText(fe, V.outline.width, V.outline.width),
              (B += V.outline.width * 2),
              (L += V.outline.width * 3)),
              E.fillText(fe, V.outline?.width ?? 0, V.outline?.width ?? 0);
            let K = E.getImageData(0, 0, B, L);
            if (
              V.cursor.x + B > $r &&
              ((V.cursor.x = 0), (V.cursor.y += L), V.cursor.y > zr)
            )
              throw new Error("Font atlas exceeds character limit");
            r.tex.update(K, V.cursor.x, V.cursor.y),
              (r.map[fe] = new ae(V.cursor.x, V.cursor.y, B, L)),
              (V.cursor.x += B);
          }
      }
      let c = t.size || r.size,
        f = T(t.scale ?? 1).scale(c / r.size),
        b = t.lineSpacing ?? 0,
        g = t.letterSpacing ?? 0,
        l = 0,
        w = 0,
        A = 0,
        D = [],
        N = [],
        _ = 0,
        M = null,
        P = null;
      for (; _ < u.length; ) {
        let Q = u[_];
        if (
          Q ===
          `
`
        )
          (A += c + b),
            D.push({ width: l - g, chars: N }),
            (M = null),
            (P = null),
            (l = 0),
            (N = []);
        else {
          let H = r.map[Q];
          if (H) {
            let V = H.w * f.x;
            t.width &&
              l + V > t.width &&
              ((A += c + b),
              M != null &&
                ((_ -= N.length - M),
                (Q = u[_]),
                (H = r.map[Q]),
                (V = H.w * f.x),
                (N = N.slice(0, M - 1)),
                (l = P)),
              (M = null),
              (P = null),
              D.push({ width: l - g, chars: N }),
              (l = 0),
              (N = [])),
              N.push({
                tex: r.tex,
                width: H.w,
                height: H.h,
                quad: new ae(
                  H.x / r.tex.width,
                  H.y / r.tex.height,
                  H.w / r.tex.width,
                  H.h / r.tex.height
                ),
                ch: Q,
                pos: new y(l, A),
                opacity: t.opacity ?? 1,
                color: t.color ?? Y.WHITE,
                scale: T(f),
                angle: 0,
              }),
              Q === " " && ((M = N.length), (P = l)),
              (l += V),
              (w = Math.max(w, l)),
              (l += g);
          }
        }
        _++;
      }
      D.push({ width: l - g, chars: N }), (A += c), t.width && (w = t.width);
      let oe = [];
      for (let Q of D) {
        let H = (w - Q.width) * to(t.align ?? "left");
        for (let V of Q.chars) {
          let fe = r.map[V.ch],
            E = oe.length;
          if (
            ((V.pos = V.pos.add(H, 0).add(fe.w * f.x * 0.5, fe.h * f.y * 0.5)),
            t.transform)
          ) {
            let G =
              typeof t.transform == "function"
                ? t.transform(E, V.ch)
                : t.transform;
            G && it(V, G);
          }
          if (s[E]) {
            let G = s[E];
            for (let B of G) {
              let L = t.styles[B],
                K = typeof L == "function" ? L(E, V.ch) : L;
              K && it(V, K);
            }
          }
          oe.push(V);
        }
      }
      return { width: w, height: A, chars: oe, opt: t };
    }
    i(Xe, "formatText");
    function Zn(t) {
      Je(Xe(t));
    }
    i(Zn, "drawText");
    function Je(t) {
      X(),
        re(t.opt.pos),
        je(t.opt.angle),
        re(
          ct(t.opt.anchor ?? "topleft")
            .add(1, 1)
            .scale(t.width, t.height)
            .scale(-0.5)
        ),
        t.chars.forEach((r) => {
          Ce({
            tex: r.tex,
            width: r.width,
            height: r.height,
            pos: r.pos,
            scale: r.scale,
            angle: r.angle,
            color: r.color,
            opacity: r.opacity,
            quad: r.quad,
            anchor: "center",
            uniform: t.opt.uniform,
            shader: t.opt.shader,
            fixed: t.opt.fixed,
          });
        }),
        he();
    }
    i(Je, "drawFormattedText");
    function we() {
      return U.width;
    }
    i(we, "width");
    function xe() {
      return U.height;
    }
    i(xe, "height");
    function Qr(t) {
      return new y(
        ((t.x - U.viewport.x) * we()) / U.viewport.width,
        ((t.y - U.viewport.y) * xe()) / U.viewport.height
      );
    }
    i(Qr, "windowToContent");
    function Zr(t) {
      return new y(
        (t.x * U.viewport.width) / U.width,
        (t.y * U.viewport.height) / U.height
      );
    }
    i(Zr, "contentToView");
    function _t() {
      return Qr(v.mousePos());
    }
    i(_t, "mousePos");
    let er = !1,
      se = {
        inspect: !1,
        timeScale: 1,
        showLog: !0,
        fps: () => v.fps(),
        numFrames: () => v.numFrames(),
        stepFrame: hr,
        drawCalls: () => U.lastDrawCalls,
        clearLog: () => (C.logs = []),
        log: (t) => {
          let r = n.logMax ?? zi;
          C.logs.unshift({ msg: t, time: v.time() }),
            C.logs.length > r && (C.logs = C.logs.slice(0, r));
        },
        error: (t) => se.log(new Error(t.toString ? t.toString() : t)),
        curRecording: null,
        numObjects: () => Rn("*", { recursive: !0 }).length,
        get paused() {
          return er;
        },
        set paused(t) {
          (er = t), t ? ne.ctx.suspend() : ne.ctx.resume();
        },
      };
    function De() {
      return v.dt() * se.timeScale;
    }
    i(De, "dt");
    function es(...t) {
      return (
        t.length > 0 && (C.cam.pos = T(...t)),
        C.cam.pos ? C.cam.pos.clone() : qt()
      );
    }
    i(es, "camPos");
    function ts(...t) {
      return t.length > 0 && (C.cam.scale = T(...t)), C.cam.scale.clone();
    }
    i(ts, "camScale");
    function ns(t) {
      return t !== void 0 && (C.cam.angle = t), C.cam.angle;
    }
    i(ns, "camRot");
    function rs(t = 12) {
      C.cam.shake += t;
    }
    i(rs, "shake");
    function tr(t) {
      return C.cam.transform.multVec2(t);
    }
    i(tr, "toScreen");
    function nr(t) {
      return C.cam.transform.invert().multVec2(t);
    }
    i(nr, "toWorld");
    function kt(t) {
      let r = new Ue();
      return (
        t.pos && r.translate(t.pos),
        t.scale && r.scale(t.scale),
        t.angle && r.rotate(t.angle),
        t.parent ? r.mult(t.parent.transform) : r
      );
    }
    i(kt, "calcTransform");
    function En(t = []) {
      let r = new Map(),
        s = {},
        a = new _e(),
        u = [],
        c = null,
        f = !1,
        b = {
          id: Dr(),
          hidden: !1,
          transform: new Ue(),
          children: [],
          parent: null,
          set paused(l) {
            if (l !== f) {
              f = l;
              for (let w of u) w.paused = l;
            }
          },
          get paused() {
            return f;
          },
          add(l = []) {
            let w = Array.isArray(l) ? En(l) : l;
            if (w.parent)
              throw new Error(
                "Cannot add a game obj that already has a parent."
              );
            return (
              (w.parent = this),
              (w.transform = kt(w)),
              this.children.push(w),
              w.trigger("add", w),
              C.events.trigger("add", w),
              w
            );
          },
          readd(l) {
            let w = this.children.indexOf(l);
            return (
              w !== -1 && (this.children.splice(w, 1), this.children.push(l)), l
            );
          },
          remove(l) {
            let w = this.children.indexOf(l);
            if (w !== -1) {
              (l.parent = null), this.children.splice(w, 1);
              let A = i((D) => {
                D.trigger("destroy"),
                  C.events.trigger("destroy", D),
                  D.children.forEach((N) => A(N));
              }, "trigger");
              A(l);
            }
          },
          removeAll(l) {
            if (l) this.get(l).forEach((w) => this.remove(w));
            else for (let w of [...this.children]) this.remove(w);
          },
          update() {
            this.paused ||
              (this.children
                .sort((l, w) => (l.z ?? 0) - (w.z ?? 0))
                .forEach((l) => l.update()),
              this.trigger("update"));
          },
          draw() {
            if (this.hidden) return;
            this.canvas && this.canvas.bind();
            let l = U.fixed;
            this.fixed && (U.fixed = !0),
              X(),
              re(this.pos),
              Ne(this.scale),
              je(this.angle);
            let w = this.children.sort((A, D) => (A.z ?? 0) - (D.z ?? 0));
            if (this.mask) {
              let A = { intersect: Oe, subtract: qe }[this.mask];
              if (!A) throw new Error(`Invalid mask func: "${this.mask}"`);
              A(
                () => {
                  w.forEach((D) => D.draw());
                },
                () => {
                  this.trigger("draw");
                }
              );
            } else this.trigger("draw"), w.forEach((A) => A.draw());
            he(), (U.fixed = l), this.canvas && this.canvas.unbind();
          },
          drawInspect() {
            this.hidden ||
              (X(),
              re(this.pos),
              Ne(this.scale),
              je(this.angle),
              this.children
                .sort((l, w) => (l.z ?? 0) - (w.z ?? 0))
                .forEach((l) => l.drawInspect()),
              this.trigger("drawInspect"),
              he());
          },
          use(l) {
            if (!l) return;
            if (typeof l == "string") return this.use({ id: l });
            let w = [];
            l.id &&
              (this.unuse(l.id), (s[l.id] = []), (w = s[l.id]), r.set(l.id, l));
            for (let D in l) {
              if (Zi.has(D)) continue;
              let N = Object.getOwnPropertyDescriptor(l, D);
              if (
                (typeof N.value == "function" && (l[D] = l[D].bind(this)),
                N.set && Object.defineProperty(l, D, { set: N.set.bind(this) }),
                N.get && Object.defineProperty(l, D, { get: N.get.bind(this) }),
                eo.has(D))
              ) {
                let _ =
                  D === "add"
                    ? () => {
                        (c = i((M) => w.push(M), "onCurCompCleanup")),
                          l[D](),
                          (c = null);
                      }
                    : l[D];
                w.push(this.on(D, _).cancel);
              } else if (this[D] === void 0)
                Object.defineProperty(this, D, {
                  get: () => l[D],
                  set: (_) => (l[D] = _),
                  configurable: !0,
                  enumerable: !0,
                }),
                  w.push(() => delete this[D]);
              else throw new Error(`Duplicate component property: "${D}"`);
            }
            let A = i(() => {
              if (l.require) {
                for (let D of l.require)
                  if (!this.c(D))
                    throw new Error(
                      `Component "${l.id}" requires component "${D}"`
                    );
              }
            }, "checkDeps");
            l.destroy && w.push(l.destroy.bind(this)),
              this.exists()
                ? (A(),
                  l.add &&
                    ((c = i((D) => w.push(D), "onCurCompCleanup")),
                    l.add.call(this),
                    (c = null)))
                : l.require && w.push(this.on("add", A).cancel);
          },
          unuse(l) {
            s[l] && (s[l].forEach((w) => w()), delete s[l]),
              r.has(l) && r.delete(l);
          },
          c(l) {
            return r.get(l);
          },
          get(l, w = {}) {
            let A = w.recursive
              ? this.children.flatMap(
                  i(function D(N) {
                    return [N, ...N.children.flatMap(D)];
                  }, "recurse")
                )
              : this.children;
            if (((A = A.filter((D) => (l ? D.is(l) : !0))), w.liveUpdate)) {
              let D = i(
                  (_) =>
                    w.recursive ? this.isAncestorOf(_) : _.parent === this,
                  "isChild"
                ),
                N = [];
              N.push(
                Sn((_) => {
                  D(_) && _.is(l) && A.push(_);
                })
              ),
                N.push(
                  rr((_) => {
                    if (D(_) && _.is(l)) {
                      let M = A.findIndex((P) => P.id === _.id);
                      M !== -1 && A.splice(M, 1);
                    }
                  })
                ),
                this.onDestroy(() => {
                  for (let _ of N) _.cancel();
                });
            }
            return A;
          },
          isAncestorOf(l) {
            return l.parent
              ? l.parent === this || this.isAncestorOf(l.parent)
              : !1;
          },
          exists() {
            return C.root.isAncestorOf(this);
          },
          is(l) {
            if (l === "*") return !0;
            if (Array.isArray(l)) {
              for (let w of l) if (!this.c(w)) return !1;
              return !0;
            } else return this.c(l) != null;
          },
          on(l, w) {
            let A = a.on(l, w.bind(this));
            return c && c(() => A.cancel()), A;
          },
          trigger(l, ...w) {
            a.trigger(l, ...w), C.objEvents.trigger(l, this, ...w);
          },
          destroy() {
            this.parent && this.parent.remove(this);
          },
          inspect() {
            let l = {};
            for (let [w, A] of r) l[w] = A.inspect ? A.inspect() : null;
            return l;
          },
          onAdd(l) {
            return this.on("add", l);
          },
          onUpdate(l) {
            return this.on("update", l);
          },
          onDraw(l) {
            return this.on("draw", l);
          },
          onDestroy(l) {
            return this.on("destroy", l);
          },
          clearEvents() {
            a.clear();
          },
        },
        g = [
          "onKeyPress",
          "onKeyPressRepeat",
          "onKeyDown",
          "onKeyRelease",
          "onMousePress",
          "onMouseDown",
          "onMouseRelease",
          "onMouseMove",
          "onCharInput",
          "onMouseMove",
          "onTouchStart",
          "onTouchMove",
          "onTouchEnd",
          "onScroll",
          "onGamepadButtonPress",
          "onGamepadButtonDown",
          "onGamepadButtonRelease",
          "onGamepadStick",
        ];
      for (let l of g)
        b[l] = (...w) => {
          let A = v[l](...w);
          return u.push(A), b.onDestroy(() => A.cancel()), A;
        };
      for (let l of t) b.use(l);
      return b;
    }
    i(En, "make");
    function $e(t, r, s) {
      return (
        C.objEvents[t] || (C.objEvents[t] = new Ut()),
        C.objEvents.on(t, (a, ...u) => {
          a.is(r) && s(a, ...u);
        })
      );
    }
    i($e, "on");
    let ss = Ee(
        (t) => {
          let r = gt([{ update: t }]);
          return {
            get paused() {
              return r.paused;
            },
            set paused(s) {
              r.paused = s;
            },
            cancel: () => r.destroy(),
          };
        },
        (t, r) => $e("update", t, r)
      ),
      is = Ee(
        (t) => {
          let r = gt([{ draw: t }]);
          return {
            get paused() {
              return r.hidden;
            },
            set paused(s) {
              r.hidden = s;
            },
            cancel: () => r.destroy(),
          };
        },
        (t, r) => $e("draw", t, r)
      ),
      Sn = Ee(
        (t) => C.events.on("add", t),
        (t, r) => $e("add", t, r)
      ),
      rr = Ee(
        (t) => C.events.on("destroy", t),
        (t, r) => $e("destroy", t, r)
      );
    function os(t, r, s) {
      return $e("collide", t, (a, u, c) => u.is(r) && s(a, u, c));
    }
    i(os, "onCollide");
    function as(t, r, s) {
      return $e("collideUpdate", t, (a, u, c) => u.is(r) && s(a, u, c));
    }
    i(as, "onCollideUpdate");
    function us(t, r, s) {
      return $e("collideEnd", t, (a, u, c) => u.is(r) && s(a, u, c));
    }
    i(us, "onCollideEnd");
    function Nt(t, r) {
      Rn(t, { recursive: !0 }).forEach(r), Sn(t, r);
    }
    i(Nt, "forAllCurrentAndFuture");
    let cs = Ee(
      (t) => v.onMousePress(t),
      (t, r) => {
        let s = [];
        return (
          Nt(t, (a) => {
            if (!a.area)
              throw new Error(
                "onClick() requires the object to have area() component"
              );
            s.push(a.onClick(() => r(a)));
          }),
          Ve.join(s)
        );
      }
    );
    function hs(t, r) {
      let s = [];
      return (
        Nt(t, (a) => {
          if (!a.area)
            throw new Error(
              "onHover() requires the object to have area() component"
            );
          s.push(a.onHover(() => r(a)));
        }),
        Ve.join(s)
      );
    }
    i(hs, "onHover");
    function ls(t, r) {
      let s = [];
      return (
        Nt(t, (a) => {
          if (!a.area)
            throw new Error(
              "onHoverUpdate() requires the object to have area() component"
            );
          s.push(a.onHoverUpdate(() => r(a)));
        }),
        Ve.join(s)
      );
    }
    i(ls, "onHoverUpdate");
    function ds(t, r) {
      let s = [];
      return (
        Nt(t, (a) => {
          if (!a.area)
            throw new Error(
              "onHoverEnd() requires the object to have area() component"
            );
          s.push(a.onHoverEnd(() => r(a)));
        }),
        Ve.join(s)
      );
    }
    i(ds, "onHoverEnd");
    function fs(t) {
      C.gravity = t;
    }
    i(fs, "setGravity");
    function ms() {
      return C.gravity;
    }
    i(ms, "getGravity");
    function ps(...t) {
      t.length === 1 || t.length === 2
        ? ((U.bgColor = ee(t[0])), t[1] && (U.bgAlpha = t[1]))
        : (t.length === 3 || t.length === 4) &&
          ((U.bgColor = ee(t[0], t[1], t[2])), t[3] && (U.bgAlpha = t[3])),
        S.clearColor(
          U.bgColor.r / 255,
          U.bgColor.g / 255,
          U.bgColor.b / 255,
          U.bgAlpha
        );
    }
    i(ps, "setBackground");
    function gs() {
      return U.bgColor.clone();
    }
    i(gs, "getBackground");
    function jt(...t) {
      return {
        id: "pos",
        pos: T(...t),
        moveBy(...r) {
          this.pos = this.pos.add(T(...r));
        },
        move(...r) {
          this.moveBy(T(...r).scale(De()));
        },
        moveTo(...r) {
          if (typeof r[0] == "number" && typeof r[1] == "number")
            return this.moveTo(T(r[0], r[1]), r[2]);
          let s = r[0],
            a = r[1];
          if (a === void 0) {
            this.pos = T(s);
            return;
          }
          let u = s.sub(this.pos);
          if (u.len() <= a * De()) {
            this.pos = T(s);
            return;
          }
          this.move(u.unit().scale(a));
        },
        worldPos() {
          return this.parent
            ? this.parent.transform.multVec2(this.pos)
            : this.pos;
        },
        screenPos() {
          let r = this.worldPos();
          return pt(this) ? r : tr(r);
        },
        inspect() {
          return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
        },
        drawInspect() {
          O({ color: ee(255, 0, 0), radius: 4 / Vt() });
        },
      };
    }
    i(jt, "pos");
    function Ht(...t) {
      return t.length === 0
        ? Ht(1)
        : {
            id: "scale",
            scale: T(...t),
            scaleTo(...r) {
              this.scale = T(...r);
            },
            scaleBy(...r) {
              this.scale.scale(T(...r));
            },
            inspect() {
              return `(${mt(this.scale.x, 2)}, ${mt(this.scale.y, 2)})`;
            },
          };
    }
    i(Ht, "scale");
    function ws(t) {
      return {
        id: "rotate",
        angle: t ?? 0,
        rotateBy(r) {
          this.angle += r;
        },
        rotateTo(r) {
          this.angle = r;
        },
        inspect() {
          return `${Math.round(this.angle)}`;
        },
      };
    }
    i(ws, "rotate");
    function bs(...t) {
      return {
        id: "color",
        color: ee(...t),
        inspect() {
          return this.color.toString();
        },
      };
    }
    i(bs, "color");
    function mt(t, r) {
      return Number(t.toFixed(r));
    }
    i(mt, "toFixed");
    function vs(t) {
      return {
        id: "opacity",
        opacity: t ?? 1,
        inspect() {
          return `${mt(this.opacity, 1)}`;
        },
        fadeOut(r = 1, s = Et.linear) {
          return Pn(this.opacity, 0, r, (a) => (this.opacity = a), s);
        },
      };
    }
    i(vs, "opacity");
    function Cn(t) {
      if (!t) throw new Error("Please define an anchor");
      return {
        id: "anchor",
        anchor: t,
        inspect() {
          return typeof this.anchor == "string"
            ? this.anchor
            : this.anchor.toString();
        },
      };
    }
    i(Cn, "anchor");
    function ys(t) {
      return {
        id: "z",
        z: t,
        inspect() {
          return `${this.z}`;
        },
      };
    }
    i(ys, "z");
    function xs(t, r) {
      return {
        id: "follow",
        require: ["pos"],
        follow: { obj: t, offset: r ?? T(0) },
        add() {
          t.exists() &&
            (this.pos = this.follow.obj.pos.add(this.follow.offset));
        },
        update() {
          t.exists() &&
            (this.pos = this.follow.obj.pos.add(this.follow.offset));
        },
      };
    }
    i(xs, "follow");
    function Us(t, r) {
      let s = typeof t == "number" ? y.fromAngle(t) : t.unit();
      return {
        id: "move",
        require: ["pos"],
        update() {
          this.move(s.scale(r));
        },
      };
    }
    i(Us, "move");
    let Es = 200;
    function Ss(t = {}) {
      let r = t.distance ?? Es,
        s = !1;
      return {
        id: "offscreen",
        require: ["pos"],
        isOffScreen() {
          let a = this.screenPos(),
            u = new le(T(0), we(), xe());
          return !vt(u, a) && u.sdistToPoint(a) > r * r;
        },
        onExitScreen(a) {
          return this.on("exitView", a);
        },
        onEnterScreen(a) {
          return this.on("enterView", a);
        },
        update() {
          this.isOffScreen()
            ? (s || (this.trigger("exitView"), (s = !0)),
              t.hide && (this.hidden = !0),
              t.pause && (this.paused = !0),
              t.destroy && this.destroy())
            : (s && (this.trigger("enterView"), (s = !1)),
              t.hide && (this.hidden = !1),
              t.pause && (this.paused = !1));
        },
      };
    }
    i(Ss, "offscreen");
    function pt(t) {
      return t.fixed ? !0 : t.parent ? pt(t.parent) : !1;
    }
    i(pt, "isFixed");
    function Cs(t = {}) {
      let r = {},
        s = new Set();
      return {
        id: "area",
        collisionIgnore: t.collisionIgnore ?? [],
        add() {
          this.area.cursor && this.onHover(() => v.setCursor(this.area.cursor)),
            this.onCollideUpdate((a, u) => {
              r[a.id] || this.trigger("collide", a, u),
                (r[a.id] = u),
                s.add(a.id);
            });
        },
        update() {
          for (let a in r)
            s.has(Number(a)) ||
              (this.trigger("collideEnd", r[a].target), delete r[a]);
          s.clear();
        },
        drawInspect() {
          let a = this.localArea();
          X(), Ne(this.area.scale), re(this.area.offset);
          let u = {
            outline: { width: 4 / Vt(), color: ee(0, 0, 255) },
            anchor: this.anchor,
            fill: !1,
            fixed: pt(this),
          };
          a instanceof le
            ? ge({ ...u, pos: a.pos, width: a.width, height: a.height })
            : a instanceof ze
            ? te({ ...u, pts: a.pts })
            : a instanceof yt && O({ ...u, pos: a.center, radius: a.radius }),
            he();
        },
        area: {
          shape: t.shape ?? null,
          scale: t.scale ? T(t.scale) : T(1),
          offset: t.offset ?? T(0),
          cursor: t.cursor ?? null,
        },
        isClicked() {
          return v.isMousePressed() && this.isHovering();
        },
        isHovering() {
          let a = pt(this) ? _t() : nr(_t());
          return this.hasPoint(a);
        },
        checkCollision(a) {
          return r[a.id] ?? null;
        },
        getCollisions() {
          return Object.values(r);
        },
        isColliding(a) {
          return !!r[a.id];
        },
        isOverlapping(a) {
          let u = r[a.id];
          return u && u.hasOverlap();
        },
        onClick(a) {
          let u = v.onMousePress("left", () => {
            this.isHovering() && a();
          });
          return this.onDestroy(() => u.cancel()), u;
        },
        onHover(a) {
          let u = !1;
          return this.onUpdate(() => {
            u ? (u = this.isHovering()) : this.isHovering() && ((u = !0), a());
          });
        },
        onHoverUpdate(a) {
          return this.onUpdate(() => {
            this.isHovering() && a();
          });
        },
        onHoverEnd(a) {
          let u = !1;
          return this.onUpdate(() => {
            u ? this.isHovering() || ((u = !1), a()) : (u = this.isHovering());
          });
        },
        onCollide(a, u) {
          if (typeof a == "function" && u === void 0)
            return this.on("collide", a);
          if (typeof a == "string")
            return this.onCollide((c, f) => {
              c.is(a) && u(c, f);
            });
        },
        onCollideUpdate(a, u) {
          if (typeof a == "function" && u === void 0)
            return this.on("collideUpdate", a);
          if (typeof a == "string")
            return this.on("collideUpdate", (c, f) => c.is(a) && u(c, f));
        },
        onCollideEnd(a, u) {
          if (typeof a == "function" && u === void 0)
            return this.on("collideEnd", a);
          if (typeof a == "string")
            return this.on("collideEnd", (c) => c.is(a) && u(c));
        },
        hasPoint(a) {
          return kn(this.worldArea(), a);
        },
        resolveCollision(a) {
          let u = this.checkCollision(a);
          u &&
            !u.resolved &&
            ((this.pos = this.pos.add(u.displacement)), (u.resolved = !0));
        },
        localArea() {
          return this.area.shape ? this.area.shape : this.renderArea();
        },
        worldArea() {
          let a = this.localArea();
          if (!(a instanceof ze || a instanceof le))
            throw new Error("Only support polygon and rect shapes for now");
          let u = this.transform
            .clone()
            .scale(T(this.area.scale ?? 1))
            .translate(this.area.offset);
          if (a instanceof le) {
            let c = ct(this.anchor || tn)
              .add(1, 1)
              .scale(-0.5)
              .scale(a.width, a.height);
            u.translate(c);
          }
          return a.transform(u);
        },
        screenArea() {
          let a = this.worldArea();
          return pt(this) ? a : a.transform(C.cam.transform);
        },
      };
    }
    i(Cs, "area");
    function Qe(t) {
      return {
        color: t.color,
        opacity: t.opacity,
        anchor: t.anchor,
        outline: t.outline,
        shader: t.shader,
        uniform: t.uniform,
      };
    }
    i(Qe, "getRenderProps");
    function Tn(t, r = {}) {
      let s = null,
        a = null,
        u = null,
        c = new be();
      if (!t)
        throw new Error("Please pass the resource name or data to sprite()");
      let f = i((b, g, l, w) => {
        let A = T(1, 1);
        return (
          l && w
            ? ((A.x = l / (b.width * g.w)), (A.y = w / (b.height * g.h)))
            : l
            ? ((A.x = l / (b.width * g.w)), (A.y = A.x))
            : w && ((A.y = w / (b.height * g.h)), (A.x = A.y)),
          A
        );
      }, "calcTexScale");
      return {
        id: "sprite",
        width: 0,
        height: 0,
        frame: r.frame || 0,
        quad: r.quad || new ae(0, 0, 1, 1),
        animSpeed: r.animSpeed ?? 1,
        flipX: r.flipX ?? !1,
        flipY: r.flipY ?? !1,
        draw() {
          if (!s) return;
          let b = s.frames[this.frame ?? 0];
          if (!b) throw new Error(`Frame not found: ${this.frame ?? 0}`);
          if (s.slice9) {
            let { left: g, right: l, top: w, bottom: A } = s.slice9,
              D = s.tex.width * b.w,
              N = s.tex.height * b.h,
              _ = this.width - g - l,
              M = this.height - w - A,
              P = g / D,
              oe = l / D,
              Q = 1 - P - oe,
              H = w / N,
              V = A / N,
              fe = 1 - H - V,
              E = [
                ce(0, 0, P, H),
                ce(P, 0, Q, H),
                ce(P + Q, 0, oe, H),
                ce(0, H, P, fe),
                ce(P, H, Q, fe),
                ce(P + Q, H, oe, fe),
                ce(0, H + fe, P, V),
                ce(P, H + fe, Q, V),
                ce(P + Q, H + fe, oe, V),
                ce(0, 0, g, w),
                ce(g, 0, _, w),
                ce(g + _, 0, l, w),
                ce(0, w, g, M),
                ce(g, w, _, M),
                ce(g + _, w, l, M),
                ce(0, w + M, g, A),
                ce(g, w + M, _, A),
                ce(g + _, w + M, l, A),
              ];
            for (let G = 0; G < 9; G++) {
              let B = E[G],
                L = E[G + 9];
              Ye(
                Object.assign(Qe(this), {
                  pos: L.pos(),
                  tex: s.tex,
                  quad: b.scale(B),
                  flipX: this.flipX,
                  flipY: this.flipY,
                  tiled: r.tiled,
                  width: L.w,
                  height: L.h,
                })
              );
            }
          } else
            Ye(
              Object.assign(Qe(this), {
                tex: s.tex,
                quad: b.scale(this.quad ?? new ae(0, 0, 1, 1)),
                flipX: this.flipX,
                flipY: this.flipY,
                tiled: r.tiled,
                width: this.width,
                height: this.height,
              })
            );
        },
        add() {
          let b = i((l) => {
              let w = l.frames[0].clone();
              r.quad && (w = w.scale(r.quad));
              let A = f(l.tex, w, r.width, r.height);
              (this.width = l.tex.width * w.w * A.x),
                (this.height = l.tex.height * w.h * A.y),
                r.anim && this.play(r.anim),
                (s = l),
                c.trigger(s);
            }, "setSpriteData"),
            g = ht(t);
          g ? g.onLoad(b) : On(() => b(ht(t).data));
        },
        update() {
          if (!a) return;
          let b = s.anims[a.name];
          if (typeof b == "number") {
            this.frame = b;
            return;
          }
          if (b.speed === 0) throw new Error("Sprite anim speed cannot be 0");
          (a.timer += De() * this.animSpeed),
            a.timer >= 1 / a.speed &&
              ((a.timer = 0),
              (this.frame += u),
              (this.frame < Math.min(b.from, b.to) ||
                this.frame > Math.max(b.from, b.to)) &&
                (a.loop
                  ? a.pingpong
                    ? ((this.frame -= u), (u *= -1), (this.frame += u))
                    : (this.frame = b.from)
                  : ((this.frame = b.to), a.onEnd(), this.stop())));
        },
        play(b, g = {}) {
          if (!s) {
            c.add(() => this.play(b, g));
            return;
          }
          let l = s.anims[b];
          if (l === void 0) throw new Error(`Anim not found: ${b}`);
          a && this.stop(),
            (a =
              typeof l == "number"
                ? {
                    name: b,
                    timer: 0,
                    loop: !1,
                    pingpong: !1,
                    speed: 0,
                    onEnd: () => {},
                  }
                : {
                    name: b,
                    timer: 0,
                    loop: g.loop ?? l.loop ?? !1,
                    pingpong: g.pingpong ?? l.pingpong ?? !1,
                    speed: g.speed ?? l.speed ?? 10,
                    onEnd: g.onEnd ?? (() => {}),
                  }),
            (u = typeof l == "number" ? null : l.from < l.to ? 1 : -1),
            (this.frame = typeof l == "number" ? l : l.from),
            this.trigger("animStart", b);
        },
        stop() {
          if (!a) return;
          let b = a.name;
          (a = null), this.trigger("animEnd", b);
        },
        numFrames() {
          return s?.frames.length ?? 0;
        },
        curAnim() {
          return a?.name;
        },
        onAnimEnd(b) {
          return this.on("animEnd", b);
        },
        onAnimStart(b) {
          return this.on("animStart", b);
        },
        renderArea() {
          return new le(T(0), this.width, this.height);
        },
        inspect() {
          if (typeof t == "string") return `"${t}"`;
        },
      };
    }
    i(Tn, "sprite");
    function Ts(t, r = {}) {
      function s(u) {
        let c = Xe(
          Object.assign(Qe(u), {
            text: u.text + "",
            size: u.textSize,
            font: u.font,
            width: r.width && u.width,
            align: u.align,
            letterSpacing: u.letterSpacing,
            lineSpacing: u.lineSpacing,
            transform: u.textTransform,
            styles: u.textStyles,
          })
        );
        return (
          r.width || (u.width = c.width / (u.scale?.x || 1)),
          (u.height = c.height / (u.scale?.y || 1)),
          c
        );
      }
      i(s, "update");
      let a = {
        id: "text",
        set text(u) {
          (t = u), s(this);
        },
        get text() {
          return t;
        },
        textSize: r.size ?? qi,
        font: r.font,
        width: r.width ?? 0,
        height: 0,
        align: r.align,
        lineSpacing: r.lineSpacing,
        letterSpacing: r.letterSpacing,
        textTransform: r.transform,
        textStyles: r.styles,
        add() {
          On(() => s(this));
        },
        draw() {
          Je(s(this));
        },
        renderArea() {
          return new le(T(0), this.width, this.height);
        },
      };
      return s(a), a;
    }
    i(Ts, "text");
    function As(t, r = {}) {
      if (t.length < 3)
        throw new Error(
          `Polygon's need more than two points, ${t.length} points provided`
        );
      return {
        id: "polygon",
        pts: t,
        colors: r.colors,
        radius: r.radius,
        draw() {
          te(
            Object.assign(Qe(this), {
              pts: this.pts,
              colors: this.colors,
              radius: this.radius,
              fill: r.fill,
            })
          );
        },
        renderArea() {
          return new ze(this.pts);
        },
        inspect() {
          return this.pts.map((s) => `[${s.x},${s.y}]`).join(",");
        },
      };
    }
    i(As, "polygon");
    function Os(t, r, s = {}) {
      return {
        id: "rect",
        width: t,
        height: r,
        radius: s.radius || 0,
        draw() {
          ge(
            Object.assign(Qe(this), {
              width: this.width,
              height: this.height,
              radius: this.radius,
              fill: s.fill,
            })
          );
        },
        renderArea() {
          return new le(T(0), this.width, this.height);
        },
        inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        },
      };
    }
    i(Os, "rect");
    function Rs(t, r) {
      return {
        id: "rect",
        width: t,
        height: r,
        draw() {
          Ce(
            Object.assign(Qe(this), { width: this.width, height: this.height })
          );
        },
        renderArea() {
          return new le(T(0), this.width, this.height);
        },
        inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        },
      };
    }
    i(Rs, "uvquad");
    function Ps(t, r = {}) {
      return {
        id: "circle",
        radius: t,
        draw() {
          O(Object.assign(Qe(this), { radius: this.radius, fill: r.fill }));
        },
        renderArea() {
          return new le(
            new y(this.anchor ? 0 : -this.radius),
            this.radius * 2,
            this.radius * 2
          );
        },
        inspect() {
          return `${Math.ceil(this.radius)}`;
        },
      };
    }
    i(Ps, "circle");
    function Ds(t = 1, r = ee(0, 0, 0)) {
      return { id: "outline", outline: { width: t, color: r } };
    }
    i(Ds, "outline");
    function An() {
      return {
        id: "timer",
        wait(t, r) {
          let s = [];
          r && s.push(r);
          let a = 0,
            u = this.onUpdate(() => {
              (a += De()), a >= t && (s.forEach((c) => c()), u.cancel());
            });
          return {
            get paused() {
              return u.paused;
            },
            set paused(c) {
              u.paused = c;
            },
            cancel: u.cancel,
            onEnd(c) {
              s.push(c);
            },
            then(c) {
              return this.onEnd(c), this;
            },
          };
        },
        loop(t, r) {
          let s = null,
            a = i(() => {
              (s = this.wait(t, a)), r();
            }, "newAction");
          return (
            (s = this.wait(0, a)),
            {
              get paused() {
                return s.paused;
              },
              set paused(u) {
                s.paused = u;
              },
              cancel: () => s.cancel(),
            }
          );
        },
        tween(t, r, s, a, u = Et.linear) {
          let c = 0,
            f = [],
            b = this.onUpdate(() => {
              c += De();
              let g = Math.min(c / s, 1);
              a(Ie(t, r, u(g))),
                g === 1 && (b.cancel(), a(r), f.forEach((l) => l()));
            });
          return {
            get paused() {
              return b.paused;
            },
            set paused(g) {
              b.paused = g;
            },
            onEnd(g) {
              f.push(g);
            },
            then(g) {
              return this.onEnd(g), this;
            },
            cancel() {
              b.cancel();
            },
            finish() {
              b.cancel(), a(r), f.forEach((g) => g());
            },
          };
        },
      };
    }
    i(An, "timer");
    let Ms = 640,
      Gs = 65536;
    function Bs(t = {}) {
      let r = T(0),
        s = null,
        a = null,
        u = !1;
      return {
        id: "body",
        require: ["pos", "area"],
        jumpForce: t.jumpForce ?? Ms,
        gravityScale: t.gravityScale ?? 1,
        isStatic: t.isStatic ?? !1,
        mass: t.mass ?? 1,
        add() {
          if (this.mass === 0) throw new Error("Can't set body mass to 0");
          this.onCollideUpdate((c, f) => {
            if (
              c.is("body") &&
              !f.resolved &&
              (this.trigger("beforePhysicsResolve", f),
              c.trigger("beforePhysicsResolve", f.reverse()),
              !f.resolved && !(this.isStatic && c.isStatic))
            ) {
              if (!this.isStatic && !c.isStatic) {
                let b = this.mass + c.mass;
                (this.pos = this.pos.add(f.displacement.scale(c.mass / b))),
                  (c.pos = c.pos.add(f.displacement.scale(-this.mass / b))),
                  (this.transform = kt(this)),
                  (c.transform = kt(c));
              } else {
                let b = !this.isStatic && c.isStatic ? f : f.reverse();
                (b.source.pos = b.source.pos.add(b.displacement)),
                  (b.source.transform = kt(b.source));
              }
              (f.resolved = !0),
                this.trigger("physicsResolve", f),
                c.trigger("physicsResolve", f.reverse());
            }
          }),
            this.onPhysicsResolve((c) => {
              C.gravity &&
                (c.isBottom() && this.isFalling()
                  ? ((r.y = 0),
                    (s = c.target),
                    (a = c.target.pos),
                    u ? (u = !1) : this.trigger("ground", s))
                  : c.isTop() &&
                    this.isJumping() &&
                    ((r.y = 0), this.trigger("headbutt", c.target)));
            });
        },
        update() {
          if (!C.gravity || this.isStatic) return;
          if (
            (u && ((s = null), (a = null), this.trigger("fallOff"), (u = !1)),
            s)
          )
            if (!this.isColliding(s) || !s.exists() || !s.is("body")) u = !0;
            else {
              !s.pos.eq(a) &&
                t.stickToPlatform !== !1 &&
                this.moveBy(s.pos.sub(a)),
                (a = s.pos);
              return;
            }
          let c = r.y;
          (r.y += C.gravity * this.gravityScale * De()),
            (r.y = Math.min(r.y, t.maxVelocity ?? Gs)),
            c < 0 && r.y >= 0 && this.trigger("fall"),
            this.move(r);
        },
        onPhysicsResolve(c) {
          return this.on("physicsResolve", c);
        },
        onBeforePhysicsResolve(c) {
          return this.on("beforePhysicsResolve", c);
        },
        curPlatform() {
          return s;
        },
        isGrounded() {
          return s !== null;
        },
        isFalling() {
          return r.y > 0;
        },
        isJumping() {
          return r.y < 0;
        },
        jump(c) {
          (s = null), (a = null), (r.y = -c || -this.jumpForce);
        },
        onGround(c) {
          return this.on("ground", c);
        },
        onFall(c) {
          return this.on("fall", c);
        },
        onFallOff(c) {
          return this.on("fallOff", c);
        },
        onHeadbutt(c) {
          return this.on("headbutt", c);
        },
      };
    }
    i(Bs, "body");
    function Fs(t = 2) {
      let r = t;
      return {
        id: "doubleJump",
        require: ["body"],
        numJumps: t,
        add() {
          this.onGround(() => {
            r = this.numJumps;
          });
        },
        doubleJump(s) {
          r <= 0 ||
            (r < this.numJumps && this.trigger("doubleJump"),
            r--,
            this.jump(s));
        },
        onDoubleJump(s) {
          return this.on("doubleJump", s);
        },
        inspect() {
          return `${r}`;
        },
      };
    }
    i(Fs, "doubleJump");
    function Is(t, r) {
      return {
        id: "shader",
        shader: t,
        ...(typeof r == "function"
          ? {
              uniform: r(),
              update() {
                this.uniform = r();
              },
            }
          : { uniform: r }),
      };
    }
    i(Is, "shader");
    function Ls() {
      return { id: "fixed", fixed: !0 };
    }
    i(Ls, "fixed");
    function sr(t) {
      return { id: "stay", stay: !0, scenesToStay: t };
    }
    i(sr, "stay");
    function Vs(t, r) {
      if (t == null)
        throw new Error("health() requires the initial amount of hp");
      return {
        id: "health",
        hurt(s = 1) {
          this.setHP(t - s), this.trigger("hurt", s);
        },
        heal(s = 1) {
          let a = t;
          this.setHP(t + s), this.trigger("heal", t - a);
        },
        hp() {
          return t;
        },
        maxHP() {
          return r ?? null;
        },
        setMaxHP(s) {
          r = s;
        },
        setHP(s) {
          (t = r ? Math.min(r, s) : s), t <= 0 && this.trigger("death");
        },
        onHurt(s) {
          return this.on("hurt", s);
        },
        onHeal(s) {
          return this.on("heal", s);
        },
        onDeath(s) {
          return this.on("death", s);
        },
        inspect() {
          return `${t}`;
        },
      };
    }
    i(Vs, "health");
    function _s(t, r = {}) {
      if (t == null) throw new Error("lifespan() requires time");
      let s = r.fade ?? 0;
      return {
        id: "lifespan",
        async add() {
          await ur(t),
            s > 0 &&
              this.opacity &&
              (await Pn(
                this.opacity,
                0,
                s,
                (a) => (this.opacity = a),
                Et.linear
              )),
            this.destroy();
        },
      };
    }
    i(_s, "lifespan");
    function ks(t, r, s) {
      if (!t) throw new Error("state() requires an initial state");
      let a = {};
      function u(g) {
        a[g] ||
          (a[g] = {
            enter: new be(),
            end: new be(),
            update: new be(),
            draw: new be(),
          });
      }
      i(u, "initStateEvents");
      function c(g, l, w) {
        return u(l), a[l][g].add(w);
      }
      i(c, "on");
      function f(g, l, ...w) {
        u(l), a[l][g].trigger(...w);
      }
      i(f, "trigger");
      let b = !1;
      return {
        id: "state",
        state: t,
        enterState(g, ...l) {
          if (((b = !0), r && !r.includes(g)))
            throw new Error(`State not found: ${g}`);
          let w = this.state;
          if (s) {
            if (!s?.[w]) return;
            let A = typeof s[w] == "string" ? [s[w]] : s[w];
            if (!A.includes(g))
              throw new Error(
                `Cannot transition state from "${w}" to "${g}". Available transitions: ${A.map(
                  (D) => `"${D}"`
                ).join(", ")}`
              );
          }
          f("end", w, ...l),
            (this.state = g),
            f("enter", g, ...l),
            f("enter", `${w} -> ${g}`, ...l);
        },
        onStateTransition(g, l, w) {
          return c("enter", `${g} -> ${l}`, w);
        },
        onStateEnter(g, l) {
          return c("enter", g, l);
        },
        onStateUpdate(g, l) {
          return c("update", g, l);
        },
        onStateDraw(g, l) {
          return c("draw", g, l);
        },
        onStateEnd(g, l) {
          return c("end", g, l);
        },
        update() {
          b || (f("enter", t), (b = !0)), f("update", this.state);
        },
        draw() {
          f("draw", this.state);
        },
        inspect() {
          return this.state;
        },
      };
    }
    i(ks, "state");
    function Ns(t = 1) {
      let r = 0,
        s = !1;
      return {
        require: ["opacity"],
        add() {
          this.opacity = 0;
        },
        update() {
          s ||
            ((r += De()),
            (this.opacity = Le(r, 0, t, 0, 1)),
            r >= t && ((this.opacity = 1), (s = !0)));
        },
      };
    }
    i(Ns, "fadeIn");
    function js(t = "intersect") {
      return { id: "mask", mask: t };
    }
    i(js, "mask");
    function Hs(t) {
      return {
        add() {
          this.canvas = t;
        },
      };
    }
    i(Hs, "drawon");
    function On(t) {
      j.loaded ? t() : C.events.on("load", t);
    }
    i(On, "onLoad");
    function qs(t, r) {
      C.scenes[t] = r;
    }
    i(qs, "scene");
    function $s(t, ...r) {
      if (!C.scenes[t]) throw new Error(`Scene not found: ${t}`);
      C.events.onOnce("frameEnd", () => {
        C.events.trigger("sceneLeave", t),
          v.events.clear(),
          C.events.clear(),
          C.objEvents.clear(),
          [...C.root.children].forEach((s) => {
            (!s.stay || (s.scenesToStay && !s.scenesToStay.includes(t))) &&
              C.root.remove(s);
          }),
          C.root.clearEvents(),
          fr(),
          (C.cam = {
            pos: null,
            scale: T(1),
            angle: 0,
            shake: 0,
            transform: new Ue(),
          }),
          C.scenes[t](...r);
      });
    }
    i($s, "go");
    function zs(t) {
      return C.events.on("sceneLeave", t);
    }
    i(zs, "onSceneLeave");
    function Ks(t, r) {
      try {
        return JSON.parse(window.localStorage[t]);
      } catch {
        return r ? (ir(t, r), r) : null;
      }
    }
    i(Ks, "getData");
    function ir(t, r) {
      window.localStorage[t] = JSON.stringify(r);
    }
    i(ir, "setData");
    function or(t, ...r) {
      let s = t(Ze),
        a;
      typeof s == "function" ? (a = s(...r)(Ze)) : (a = s);
      for (let u in a) (Ze[u] = a[u]), n.global !== !1 && (window[u] = a[u]);
      return Ze;
    }
    i(or, "plug");
    function qt() {
      return T(we() / 2, xe() / 2);
    }
    i(qt, "center");
    let Ys;
    ((P) => (
      (P[(P.None = 0)] = "None"),
      (P[(P.Left = 1)] = "Left"),
      (P[(P.Top = 2)] = "Top"),
      (P[(P.LeftTop = 3)] = "LeftTop"),
      (P[(P.Right = 4)] = "Right"),
      (P[(P.Horizontal = 5)] = "Horizontal"),
      (P[(P.RightTop = 6)] = "RightTop"),
      (P[(P.HorizontalTop = 7)] = "HorizontalTop"),
      (P[(P.Bottom = 8)] = "Bottom"),
      (P[(P.LeftBottom = 9)] = "LeftBottom"),
      (P[(P.Vertical = 10)] = "Vertical"),
      (P[(P.LeftVertical = 11)] = "LeftVertical"),
      (P[(P.RightBottom = 12)] = "RightBottom"),
      (P[(P.HorizontalBottom = 13)] = "HorizontalBottom"),
      (P[(P.RightVertical = 14)] = "RightVertical"),
      (P[(P.All = 15)] = "All")
    ))((Ys ||= {}));
    function ar(t = {}) {
      let r = T(0),
        s = t.isObstacle ?? !1,
        a = t.cost ?? 0,
        u = t.edges ?? [],
        c = i(() => {
          let b = { left: 1, top: 2, right: 4, bottom: 8 };
          return u.map((g) => b[g] || 0).reduce((g, l) => g | l, 0);
        }, "getEdgeMask"),
        f = c();
      return {
        id: "tile",
        tilePosOffset: t.offset ?? T(0),
        set tilePos(b) {
          let g = this.getLevel();
          (r = b.clone()),
            (this.pos = T(
              this.tilePos.x * g.tileWidth(),
              this.tilePos.y * g.tileHeight()
            ).add(this.tilePosOffset));
        },
        get tilePos() {
          return r;
        },
        set isObstacle(b) {
          s !== b && ((s = b), this.getLevel().invalidateNavigationMap());
        },
        get isObstacle() {
          return s;
        },
        set cost(b) {
          a !== b && ((a = b), this.getLevel().invalidateNavigationMap());
        },
        get cost() {
          return a;
        },
        set edges(b) {
          (u = b), (f = c()), this.getLevel().invalidateNavigationMap();
        },
        get edges() {
          return u;
        },
        get edgeMask() {
          return f;
        },
        getLevel() {
          return this.parent;
        },
        moveLeft() {
          this.tilePos = this.tilePos.add(T(-1, 0));
        },
        moveRight() {
          this.tilePos = this.tilePos.add(T(1, 0));
        },
        moveUp() {
          this.tilePos = this.tilePos.add(T(0, -1));
        },
        moveDown() {
          this.tilePos = this.tilePos.add(T(0, 1));
        },
      };
    }
    i(ar, "tile");
    function Ws(t, r) {
      if (!r.tileWidth || !r.tileHeight)
        throw new Error("Must provide tileWidth and tileHeight.");
      let s = gt([jt(r.pos ?? T(0))]),
        a = t.length,
        u = 0,
        c = null,
        f = null,
        b = null,
        g = null,
        l = i((E) => E.x + E.y * u, "tile2Hash"),
        w = i((E) => T(Math.floor(E % u), Math.floor(E / u)), "hash2Tile"),
        A = i(() => {
          c = [];
          for (let E of s.children) D(E);
        }, "createSpatialMap"),
        D = i((E) => {
          let G = l(E.tilePos);
          c[G] ? c[G].push(E) : (c[G] = [E]);
        }, "insertIntoSpatialMap"),
        N = i((E) => {
          let G = l(E.tilePos);
          if (c[G]) {
            let B = c[G].indexOf(E);
            B >= 0 && c[G].splice(B, 1);
          }
        }, "removeFromSpatialMap"),
        _ = i(() => {
          let E = !1;
          for (let G of s.children) {
            let B = s.pos2Tile(G.pos);
            (G.tilePos.x != B.x || G.tilePos.y != B.y) &&
              ((E = !0), N(G), (G.tilePos.x = B.x), (G.tilePos.y = B.y), D(G));
          }
          E && s.trigger("spatial_map_changed");
        }, "updateSpatialMap"),
        M = i(() => {
          let E = s.getSpatialMap(),
            G = s.numRows() * s.numColumns();
          f ? (f.length = G) : (f = new Array(G)), f.fill(1, 0, G);
          for (let B = 0; B < E.length; B++) {
            let L = E[B];
            if (L) {
              let K = 0;
              for (let Z of L)
                if (Z.isObstacle) {
                  K = 1 / 0;
                  break;
                } else K += Z.cost;
              f[B] = K || 1;
            }
          }
        }, "createCostMap"),
        P = i(() => {
          let E = s.getSpatialMap(),
            G = s.numRows() * s.numColumns();
          b ? (b.length = G) : (b = new Array(G)), b.fill(15, 0, G);
          for (let B = 0; B < E.length; B++) {
            let L = E[B];
            if (L) {
              let K = L.length,
                Z = 15;
              for (let ue = 0; ue < K; ue++) Z |= L[ue].edgeMask;
              b[B] = Z;
            }
          }
        }, "createEdgeMap"),
        oe = i(() => {
          let E = s.numRows() * s.numColumns(),
            G = i((L, K) => {
              let Z = [];
              for (Z.push(L); Z.length > 0; ) {
                let ue = Z.pop();
                V(ue).forEach((me) => {
                  g[me] < 0 && ((g[me] = K), Z.push(me));
                });
              }
            }, "traverse");
          g ? (g.length = E) : (g = new Array(E)), g.fill(-1, 0, E);
          let B = 0;
          for (let L = 0; L < f.length; L++) {
            if (g[L] >= 0) {
              B++;
              continue;
            }
            G(L, B), B++;
          }
        }, "createConnectivityMap"),
        Q = i((E, G) => f[G], "getCost"),
        H = i((E, G) => {
          let B = w(E),
            L = w(G);
          return B.dist(L);
        }, "getHeuristic"),
        V = i((E, G) => {
          let B = [],
            L = Math.floor(E % u),
            K = L > 0 && b[E] & 1 && f[E - 1] !== 1 / 0,
            Z = E >= u && b[E] & 2 && f[E - u] !== 1 / 0,
            ue = L < u - 1 && b[E] & 4 && f[E + 1] !== 1 / 0,
            me = E < u * a - u - 1 && b[E] & 8 && f[E + u] !== 1 / 0;
          return (
            G
              ? (K &&
                  (Z && B.push(E - u - 1),
                  B.push(E - 1),
                  me && B.push(E + u - 1)),
                Z && B.push(E - u),
                ue &&
                  (Z && B.push(E - u + 1),
                  B.push(E + 1),
                  me && B.push(E + u + 1)),
                me && B.push(E + u))
              : (K && B.push(E - 1),
                Z && B.push(E - u),
                ue && B.push(E + 1),
                me && B.push(E + u)),
            B
          );
        }, "getNeighbours"),
        fe = {
          id: "level",
          tileWidth() {
            return r.tileWidth;
          },
          tileHeight() {
            return r.tileHeight;
          },
          spawn(E, ...G) {
            let B = T(...G),
              L = (() => {
                if (typeof E == "string") {
                  if (r.tiles[E]) {
                    if (typeof r.tiles[E] != "function")
                      throw new Error(
                        "Level symbol def must be a function returning a component list"
                      );
                    return r.tiles[E](B);
                  } else if (r.wildcardTile) return r.wildcardTile(E, B);
                } else {
                  if (Array.isArray(E)) return E;
                  throw new Error("Expected a symbol or a component list");
                }
              })();
            if (!L) return null;
            let K = !1,
              Z = !1;
            for (let me of L)
              me.id === "tile" && (Z = !0), me.id === "pos" && (K = !0);
            K || L.push(jt()), Z || L.push(ar());
            let ue = s.add(L);
            return (
              K && (ue.tilePosOffset = ue.pos.clone()),
              (ue.tilePos = B),
              c &&
                (D(ue),
                this.trigger("spatial_map_changed"),
                this.trigger("navigation_map_invalid")),
              ue
            );
          },
          numColumns() {
            return u;
          },
          numRows() {
            return a;
          },
          levelWidth() {
            return u * this.tileWidth();
          },
          levelHeight() {
            return a * this.tileHeight();
          },
          tile2Pos(...E) {
            return T(...E).scale(this.tileWidth(), this.tileHeight());
          },
          pos2Tile(...E) {
            let G = T(...E);
            return T(
              Math.floor(G.x / this.tileWidth()),
              Math.floor(G.y / this.tileHeight())
            );
          },
          getSpatialMap() {
            return c || A(), c;
          },
          onSpatialMapChanged(E) {
            return this.on("spatial_map_changed", E);
          },
          onNavigationMapInvalid(E) {
            return this.on("navigation_map_invalid", E);
          },
          getAt(E) {
            c || A();
            let G = l(E);
            return c[G] || [];
          },
          update() {
            c && _();
          },
          invalidateNavigationMap() {
            (f = null), (b = null), (g = null);
          },
          onNavigationMapChanged(E) {
            return this.on("navigation_map_changed", E);
          },
          getTilePath(E, G, B = {}) {
            if (
              (f || M(),
              b || P(),
              g || oe(),
              E.x < 0 ||
                E.x >= u ||
                E.y < 0 ||
                E.y >= a ||
                G.x < 0 ||
                G.x >= u ||
                G.y < 0 ||
                G.y >= a)
            )
              return null;
            let L = l(E),
              K = l(G);
            if (f[K] === 1 / 0) return null;
            if (L === K) return [];
            if (g[L] != -1 && g[L] !== g[K]) return null;
            let Z = new Kt((Ge, Gn) => Ge.cost < Gn.cost);
            Z.insert({ cost: 0, node: L });
            let ue = new Map();
            ue.set(L, L);
            let me = new Map();
            for (me.set(L, 0); Z.length !== 0; ) {
              let Ge = Z.remove()?.node;
              if (Ge === K) break;
              let Gn = V(Ge, B.allowDiagonals);
              for (let et of Gn) {
                let Bn = (me.get(Ge) || 0) + Q(Ge, et) + H(et, K);
                (!me.has(et) || Bn < me.get(et)) &&
                  (me.set(et, Bn),
                  Z.insert({ cost: Bn, node: et }),
                  ue.set(et, Ge));
              }
            }
            let Mn = [],
              wt = K,
              gi = w(wt);
            for (Mn.push(gi); wt !== L; ) {
              wt = ue.get(wt);
              let Ge = w(wt);
              Mn.push(Ge);
            }
            return Mn.reverse();
          },
          getPath(E, G, B = {}) {
            let L = this.tileWidth(),
              K = this.tileHeight(),
              Z = this.getTilePath(this.pos2Tile(E), this.pos2Tile(G), B);
            return Z
              ? [
                  E,
                  ...Z.slice(1, -1).map((ue) =>
                    ue.scale(L, K).add(L / 2, K / 2)
                  ),
                  G,
                ]
              : null;
          },
        };
      return (
        s.use(fe),
        s.onNavigationMapInvalid(() => {
          s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
        }),
        t.forEach((E, G) => {
          let B = E.split("");
          (u = Math.max(B.length, u)),
            B.forEach((L, K) => {
              s.spawn(L, T(K, G));
            });
        }),
        s
      );
    }
    i(Ws, "addLevel");
    function Xs(t = {}) {
      let r = null,
        s = null,
        a = null,
        u = null;
      return {
        id: "agent",
        require: ["pos", "tile"],
        agentSpeed: t.speed ?? 100,
        allowDiagonals: t.allowDiagonals ?? !0,
        getDistanceToTarget() {
          return r ? this.pos.dist(r) : 0;
        },
        getNextLocation() {
          return s && a ? s[a] : null;
        },
        getPath() {
          return s ? s.slice() : null;
        },
        getTarget() {
          return r;
        },
        isNavigationFinished() {
          return s ? a === null : !0;
        },
        isTargetReachable() {
          return s !== null;
        },
        isTargetReached() {
          return r ? this.pos.eq(r) : !0;
        },
        setTarget(c) {
          (r = c),
            (s = this.getLevel().getPath(this.pos, r, {
              allowDiagonals: this.allowDiagonals,
            })),
            (a = s ? 0 : null),
            s
              ? (u ||
                  ((u = this.getLevel().onNavigationMapChanged(() => {
                    s &&
                      a !== null &&
                      ((s = this.getLevel().getPath(this.pos, r, {
                        allowDiagonals: this.allowDiagonals,
                      })),
                      (a = s ? 0 : null),
                      s
                        ? this.trigger("navigation-next", this, s[a])
                        : this.trigger("navigation-ended", this));
                  })),
                  this.onDestroy(() => u.cancel())),
                this.trigger("navigation-started", this),
                this.trigger("navigation-next", this, s[a]))
              : this.trigger("navigation-ended", this);
        },
        update() {
          if (s && a !== null) {
            if (this.pos.sdist(s[a]) < 2)
              if (a === s.length - 1) {
                (this.pos = r.clone()),
                  (a = null),
                  this.trigger("navigation-ended", this),
                  this.trigger("target-reached", this);
                return;
              } else a++, this.trigger("navigation-next", this, s[a]);
            this.moveTo(s[a], this.agentSpeed);
          }
        },
        onNavigationStarted(c) {
          return this.on("navigation-started", c);
        },
        onNavigationNext(c) {
          return this.on("navigation-next", c);
        },
        onNavigationEnded(c) {
          return this.on("navigation-ended", c);
        },
        onTargetReached(c) {
          return this.on("target-reached", c);
        },
        inspect() {
          return JSON.stringify({
            target: JSON.stringify(r),
            path: JSON.stringify(s),
          });
        },
      };
    }
    i(Xs, "agent");
    function Js(t) {
      let r = v.canvas().captureStream(t),
        s = ne.ctx.createMediaStreamDestination();
      ne.masterNode.connect(s);
      let a = new MediaRecorder(r),
        u = [];
      return (
        (a.ondataavailable = (c) => {
          c.data.size > 0 && u.push(c.data);
        }),
        (a.onerror = () => {
          ne.masterNode.disconnect(s), r.getTracks().forEach((c) => c.stop());
        }),
        a.start(),
        {
          resume() {
            a.resume();
          },
          pause() {
            a.pause();
          },
          stop() {
            return (
              a.stop(),
              ne.masterNode.disconnect(s),
              r.getTracks().forEach((c) => c.stop()),
              new Promise((c) => {
                a.onstop = () => {
                  c(new Blob(u, { type: "video/mp4" }));
                };
              })
            );
          },
          download(c = "kaboom.mp4") {
            this.stop().then((f) => jn(c, f));
          },
        }
      );
    }
    i(Js, "record");
    function Qs() {
      return document.activeElement === v.canvas();
    }
    i(Qs, "isFocused");
    function Zs(t) {
      t.destroy();
    }
    i(Zs, "destroy");
    let gt = C.root.add.bind(C.root),
      ei = C.root.readd.bind(C.root),
      ti = C.root.removeAll.bind(C.root),
      Rn = C.root.get.bind(C.root),
      ur = C.root.wait.bind(C.root),
      ni = C.root.loop.bind(C.root),
      Pn = C.root.tween.bind(C.root);
    function cr(t = 2, r = 1) {
      let s = 0;
      return {
        require: ["scale"],
        update() {
          let a = Math.sin(s * t) * r;
          a < 0 && this.destroy(), (this.scale = T(a)), (s += De());
        },
      };
    }
    i(cr, "boom");
    let ri = Ke(null, Nr),
      si = Ke(null, jr);
    function ii(t, r = {}) {
      let s = gt([jt(t), sr()]),
        a = (r.speed || 1) * 5,
        u = r.scale || 1;
      s.add([Tn(si), Ht(0), Cn("center"), cr(a, u), ...(r.comps ?? [])]);
      let c = s.add([Tn(ri), Ht(0), Cn("center"), An(), ...(r.comps ?? [])]);
      return (
        c.wait(0.4 / a, () => c.use(cr(a, u))),
        c.onDestroy(() => s.destroy()),
        s
      );
    }
    i(ii, "addKaboom");
    function hr() {
      C.root.update();
    }
    i(hr, "updateFrame");
    class Dn {
      static {
        i(this, "Collision");
      }
      source;
      target;
      displacement;
      resolved = !1;
      constructor(r, s, a, u = !1) {
        (this.source = r),
          (this.target = s),
          (this.displacement = a),
          (this.resolved = u);
      }
      reverse() {
        return new Dn(
          this.target,
          this.source,
          this.displacement.scale(-1),
          this.resolved
        );
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = !0;
      }
    }
    function oi() {
      let t = {},
        r = n.hashGridSize || $i,
        s = new Ue(),
        a = [];
      function u(c) {
        if (
          (a.push(s.clone()),
          c.pos && s.translate(c.pos),
          c.scale && s.scale(c.scale),
          c.angle && s.rotate(c.angle),
          (c.transform = s.clone()),
          c.c("area") && !c.paused)
        ) {
          let f = c,
            g = f.worldArea().bbox(),
            l = Math.floor(g.pos.x / r),
            w = Math.floor(g.pos.y / r),
            A = Math.ceil((g.pos.x + g.width) / r),
            D = Math.ceil((g.pos.y + g.height) / r),
            N = new Set();
          for (let _ = l; _ <= A; _++)
            for (let M = w; M <= D; M++)
              if (!t[_]) (t[_] = {}), (t[_][M] = [f]);
              else if (!t[_][M]) t[_][M] = [f];
              else {
                let P = t[_][M];
                e: for (let oe of P) {
                  if (oe.paused || !oe.exists() || N.has(oe.id)) continue;
                  for (let H of f.collisionIgnore) if (oe.is(H)) continue e;
                  for (let H of oe.collisionIgnore) if (f.is(H)) continue e;
                  let Q = Tr(f.worldArea(), oe.worldArea());
                  if (Q) {
                    let H = new Dn(f, oe, Q);
                    f.trigger("collideUpdate", oe, H);
                    let V = H.reverse();
                    (V.resolved = H.resolved),
                      oe.trigger("collideUpdate", f, V);
                  }
                  N.add(oe.id);
                }
                P.push(f);
              }
        }
        c.children.forEach(u), (s = a.pop());
      }
      i(u, "checkObj"), u(C.root);
    }
    i(oi, "checkFrame");
    function ai() {
      let t = C.cam,
        r = y.fromAngle(xt(0, 360)).scale(t.shake);
      (t.shake = Ie(t.shake, 0, 5 * De())),
        (t.transform = new Ue()
          .translate(qt())
          .scale(t.scale)
          .rotate(t.angle)
          .translate((t.pos ?? qt()).scale(-1).add(r))),
        C.root.draw(),
        Pe();
    }
    i(ai, "drawFrame");
    function ui() {
      let t = q();
      C.events.numListeners("loading") > 0
        ? C.events.trigger("loading", t)
        : pe(() => {
            let r = we() / 2,
              s = 24,
              a = T(we() / 2, xe() / 2).sub(T(r / 2, s / 2));
            ge({ pos: T(0), width: we(), height: xe(), color: ee(0, 0, 0) }),
              ge({
                pos: a,
                width: r,
                height: s,
                fill: !1,
                outline: { width: 4 },
              }),
              ge({ pos: a, width: r * t, height: s });
          });
    }
    i(ui, "drawLoadScreen");
    function lr(t, r) {
      pe(() => {
        let s = T(8);
        X(), re(t);
        let a = Xe({
            text: r,
            font: nn,
            size: 16,
            pos: s,
            color: ee(255, 255, 255),
            fixed: !0,
          }),
          u = a.width + s.x * 2,
          c = a.height + s.x * 2;
        t.x + u >= we() && re(T(-u, 0)),
          t.y + c >= xe() && re(T(0, -c)),
          ge({
            width: u,
            height: c,
            color: ee(0, 0, 0),
            radius: 4,
            opacity: 0.8,
            fixed: !0,
          }),
          Je(a),
          he();
      });
    }
    i(lr, "drawInspectText");
    function ci() {
      if (se.inspect) {
        let t = null;
        for (let r of C.root.get("*", { recursive: !0 }))
          if (r.c("area") && r.isHovering()) {
            t = r;
            break;
          }
        if ((C.root.drawInspect(), t)) {
          let r = [],
            s = t.inspect();
          for (let a in s) s[a] ? r.push(`${a}: ${s[a]}`) : r.push(`${a}`);
          lr(
            Zr(_t()),
            r.join(`
`)
          );
        }
        lr(T(8), `FPS: ${se.fps()}`);
      }
      se.paused &&
        pe(() => {
          X(), re(we(), 0), re(-8, 8);
          let t = 32;
          ge({
            width: t,
            height: t,
            anchor: "topright",
            color: ee(0, 0, 0),
            opacity: 0.8,
            radius: 4,
            fixed: !0,
          });
          for (let r = 1; r <= 2; r++)
            ge({
              width: 4,
              height: t * 0.6,
              anchor: "center",
              pos: T((-t / 3) * r, t * 0.5),
              color: ee(255, 255, 255),
              radius: 2,
              fixed: !0,
            });
          he();
        }),
        se.timeScale !== 1 &&
          pe(() => {
            X(), re(we(), xe()), re(-8, -8);
            let t = 8,
              r = Xe({
                text: se.timeScale.toFixed(1),
                font: nn,
                size: 16,
                color: ee(255, 255, 255),
                pos: T(-t),
                anchor: "botright",
                fixed: !0,
              });
            ge({
              width: r.width + t * 2 + t * 4,
              height: r.height + t * 2,
              anchor: "botright",
              color: ee(0, 0, 0),
              opacity: 0.8,
              radius: 4,
              fixed: !0,
            });
            for (let s = 0; s < 2; s++) {
              let a = se.timeScale < 1;
              x({
                p1: T(-r.width - t * (a ? 2 : 3.5), -t),
                p2: T(-r.width - t * (a ? 2 : 3.5), -t - r.height),
                p3: T(-r.width - t * (a ? 3.5 : 2), -t - r.height / 2),
                pos: T(-s * t * 1 + (a ? -t * 0.5 : 0), 0),
                color: ee(255, 255, 255),
                fixed: !0,
              });
            }
            Je(r), he();
          }),
        se.curRecording &&
          pe(() => {
            X(),
              re(0, xe()),
              re(24, -24),
              O({
                radius: 12,
                color: ee(255, 0, 0),
                opacity: Ln(0, 1, v.time() * 4),
                fixed: !0,
              }),
              he();
          }),
        se.showLog &&
          C.logs.length > 0 &&
          pe(() => {
            X(), re(0, xe()), re(8, -8);
            let t = 8,
              r = [];
            for (let a of C.logs) {
              let u = "",
                c = a.msg instanceof Error ? "error" : "info";
              (u += `[time]${a.time.toFixed(2)}[/time]`),
                (u += " "),
                (u += `[${c}]${
                  a.msg?.toString ? a.msg.toString() : a.msg
                }[/${c}]`),
                r.push(u);
            }
            C.logs = C.logs.filter(
              (a) => v.time() - a.time < (n.logTime || Ki)
            );
            let s = Xe({
              text: r.join(`
`),
              font: nn,
              pos: T(t, -t),
              anchor: "botleft",
              size: 16,
              width: we() * 0.6,
              lineSpacing: t / 2,
              fixed: !0,
              styles: {
                time: { color: ee(127, 127, 127) },
                info: { color: ee(255, 255, 255) },
                error: { color: ee(255, 0, 127) },
              },
            });
            ge({
              width: s.width + t * 2,
              height: s.height + t * 2,
              anchor: "botleft",
              color: ee(0, 0, 0),
              radius: 4,
              opacity: 0.8,
              fixed: !0,
            }),
              Je(s),
              he();
          });
    }
    i(ci, "drawDebug");
    function hi(t) {
      C.events.on("loading", t);
    }
    i(hi, "onLoading");
    function li(t) {
      v.onResize(t);
    }
    i(li, "onResize");
    function di(t) {
      C.events.on("error", t);
    }
    i(di, "onError");
    function fi(t) {
      ne.ctx.suspend(),
        v.run(() => {
          pe(() => {
            let a = we(),
              u = xe(),
              c = {
                size: 36,
                width: a - 32 * 2,
                letterSpacing: 4,
                lineSpacing: 4,
                font: nn,
                fixed: !0,
              };
            ge({ width: a, height: u, color: ee(0, 0, 255), fixed: !0 });
            let f = Xe({
              ...c,
              text: "Error",
              pos: T(32),
              color: ee(255, 128, 0),
              fixed: !0,
            });
            Je(f),
              Zn({
                ...c,
                text: t.message,
                pos: T(32, 32 + f.height + 16),
                fixed: !0,
              }),
              he(),
              C.events.trigger("error", t);
          });
        });
    }
    i(fi, "handleErr");
    function mi(t) {
      z.push(t);
    }
    i(mi, "onCleanup");
    function pi() {
      C.events.onOnce("frameEnd", () => {
        v.quit(),
          S.clear(
            S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT
          );
        let t = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
        for (let r = 0; r < t; r++)
          S.activeTexture(S.TEXTURE0 + r),
            S.bindTexture(S.TEXTURE_2D, null),
            S.bindTexture(S.TEXTURE_CUBE_MAP, null);
        S.bindBuffer(S.ARRAY_BUFFER, null),
          S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null),
          S.bindRenderbuffer(S.RENDERBUFFER, null),
          S.bindFramebuffer(S.FRAMEBUFFER, null),
          $.destroy(),
          z.forEach((r) => r());
      });
    }
    i(pi, "quit");
    let $t = !0;
    v.run(() => {
      try {
        j.loaded ||
          (q() === 1 && !$t && ((j.loaded = !0), C.events.trigger("load"))),
          (!j.loaded && n.loadingScreen !== !1) || $t
            ? (It(), ui(), ft())
            : (se.paused || hr(),
              oi(),
              It(),
              ai(),
              n.debug !== !1 && ci(),
              ft()),
          $t && ($t = !1),
          C.events.trigger("frameEnd");
      } catch (t) {
        fi(t);
      }
    });
    function dr() {
      let t = R,
        r = S.drawingBufferWidth / t,
        s = S.drawingBufferHeight / t;
      if (n.letterbox) {
        if (!n.width || !n.height)
          throw new Error("Letterboxing requires width and height defined.");
        let a = r / s,
          u = n.width / n.height;
        if (a > u) {
          let c = s * u,
            f = (r - c) / 2;
          U.viewport = { x: f, y: 0, width: c, height: s };
        } else {
          let c = r / u,
            f = (s - c) / 2;
          U.viewport = { x: 0, y: f, width: r, height: c };
        }
        return;
      }
      if (n.stretch && (!n.width || !n.height))
        throw new Error("Stretching requires width and height defined.");
      U.viewport = { x: 0, y: 0, width: r, height: s };
    }
    i(dr, "updateViewport");
    function fr() {
      v.onHide(() => {
        n.backgroundAudio || ne.ctx.suspend();
      }),
        v.onShow(() => {
          n.backgroundAudio || ne.ctx.resume();
        }),
        v.onResize(() => {
          if (v.isFullscreen()) return;
          let t = n.width && n.height;
          (t && !n.stretch && !n.letterbox) ||
            ((o.width = o.offsetWidth * R),
            (o.height = o.offsetHeight * R),
            dr(),
            t ||
              (U.frameBuffer.free(),
              (U.frameBuffer = new rt(
                $,
                S.drawingBufferWidth,
                S.drawingBufferHeight
              )),
              (U.width = S.drawingBufferWidth / R),
              (U.height = S.drawingBufferHeight / R)));
        }),
        n.debug !== !1 &&
          (v.onKeyPress("f1", () => (se.inspect = !se.inspect)),
          v.onKeyPress("f2", () => se.clearLog()),
          v.onKeyPress("f8", () => (se.paused = !se.paused)),
          v.onKeyPress("f7", () => {
            se.timeScale = mt(Fe(se.timeScale - 0.2, 0, 2), 1);
          }),
          v.onKeyPress("f9", () => {
            se.timeScale = mt(Fe(se.timeScale + 0.2, 0, 2), 1);
          }),
          v.onKeyPress("f10", () => se.stepFrame())),
        n.burp && v.onKeyPress("b", () => Ft());
    }
    i(fr, "initEvents"), dr(), fr();
    let Ze = {
      VERSION: ji,
      loadRoot: Ae,
      loadProgress: q,
      loadSprite: Ke,
      loadSpriteAtlas: Tt,
      loadSound: ln,
      loadBitmapFont: on,
      loadFont: st,
      loadShader: cn,
      loadShaderURL: hn,
      loadAseprite: un,
      loadPedit: an,
      loadBean: dn,
      loadJSON: ye,
      load: Te,
      getSprite: Ot,
      getSound: Rt,
      getFont: Pt,
      getBitmapFont: Dt,
      getShader: Mt,
      getAsset: fn,
      Asset: ve,
      SpriteData: W,
      SoundData: de,
      width: we,
      height: xe,
      center: qt,
      dt: De,
      time: v.time,
      screenshot: v.screenshot,
      record: Js,
      isFocused: Qs,
      setCursor: v.setCursor,
      getCursor: v.getCursor,
      setCursorLocked: v.setCursorLocked,
      isCursorLocked: v.isCursorLocked,
      setFullscreen: v.setFullscreen,
      isFullscreen: v.isFullscreen,
      isTouchscreen: v.isTouchscreen,
      onLoad: On,
      onLoading: hi,
      onResize: li,
      onGamepadConnect: v.onGamepadConnect,
      onGamepadDisconnect: v.onGamepadDisconnect,
      onError: di,
      onCleanup: mi,
      camPos: es,
      camScale: ts,
      camRot: ns,
      shake: rs,
      toScreen: tr,
      toWorld: nr,
      setGravity: fs,
      getGravity: ms,
      setBackground: ps,
      getBackground: gs,
      getGamepads: v.getGamepads,
      add: gt,
      make: En,
      destroy: Zs,
      destroyAll: ti,
      get: Rn,
      readd: ei,
      pos: jt,
      scale: Ht,
      rotate: ws,
      color: bs,
      opacity: vs,
      anchor: Cn,
      area: Cs,
      sprite: Tn,
      text: Ts,
      polygon: As,
      rect: Os,
      circle: Ps,
      uvquad: Rs,
      outline: Ds,
      body: Bs,
      doubleJump: Fs,
      shader: Is,
      timer: An,
      fixed: Ls,
      stay: sr,
      health: Vs,
      lifespan: _s,
      z: ys,
      move: Us,
      offscreen: Ss,
      follow: xs,
      state: ks,
      fadeIn: Ns,
      mask: js,
      drawon: Hs,
      tile: ar,
      agent: Xs,
      on: $e,
      onUpdate: ss,
      onDraw: is,
      onAdd: Sn,
      onDestroy: rr,
      onClick: cs,
      onCollide: os,
      onCollideUpdate: as,
      onCollideEnd: us,
      onHover: hs,
      onHoverUpdate: ls,
      onHoverEnd: ds,
      onKeyDown: v.onKeyDown,
      onKeyPress: v.onKeyPress,
      onKeyPressRepeat: v.onKeyPressRepeat,
      onKeyRelease: v.onKeyRelease,
      onMouseDown: v.onMouseDown,
      onMousePress: v.onMousePress,
      onMouseRelease: v.onMouseRelease,
      onMouseMove: v.onMouseMove,
      onCharInput: v.onCharInput,
      onTouchStart: v.onTouchStart,
      onTouchMove: v.onTouchMove,
      onTouchEnd: v.onTouchEnd,
      onScroll: v.onScroll,
      onHide: v.onHide,
      onShow: v.onShow,
      onGamepadButtonDown: v.onGamepadButtonDown,
      onGamepadButtonPress: v.onGamepadButtonPress,
      onGamepadButtonRelease: v.onGamepadButtonRelease,
      onGamepadStick: v.onGamepadStick,
      mousePos: _t,
      mouseDeltaPos: v.mouseDeltaPos,
      isKeyDown: v.isKeyDown,
      isKeyPressed: v.isKeyPressed,
      isKeyPressedRepeat: v.isKeyPressedRepeat,
      isKeyReleased: v.isKeyReleased,
      isMouseDown: v.isMouseDown,
      isMousePressed: v.isMousePressed,
      isMouseReleased: v.isMouseReleased,
      isMouseMoved: v.isMouseMoved,
      isGamepadButtonPressed: v.isGamepadButtonPressed,
      isGamepadButtonDown: v.isGamepadButtonDown,
      isGamepadButtonReleased: v.isGamepadButtonReleased,
      getGamepadStick: v.getGamepadStick,
      charInputted: v.charInputted,
      loop: ni,
      wait: ur,
      play: Bt,
      volume: gn,
      burp: Ft,
      audioCtx: ne.ctx,
      Line: Be,
      Rect: le,
      Circle: yt,
      Polygon: ze,
      Vec2: y,
      Color: Y,
      Mat4: Ue,
      Quad: ae,
      RNG: bt,
      rand: xt,
      randi: Vn,
      randSeed: br,
      vec2: T,
      rgb: ee,
      hsl2rgb: wr,
      quad: ce,
      choose: yr,
      chance: vr,
      lerp: Ie,
      tween: Pn,
      easings: Et,
      map: Le,
      mapc: gr,
      wave: Ln,
      deg2rad: Me,
      rad2deg: at,
      clamp: Fe,
      testLineLine: ot,
      testRectRect: xr,
      testRectLine: Ur,
      testRectPoint: vt,
      testCirclePolygon: Cr,
      testLinePoint: Er,
      testLineCircle: _n,
      drawSprite: Lt,
      drawText: Zn,
      formatText: Xe,
      drawRect: ge,
      drawLine: He,
      drawLines: d,
      drawTriangle: x,
      drawCircle: O,
      drawEllipse: k,
      drawUVQuad: Ce,
      drawPolygon: te,
      drawFormattedText: Je,
      drawMasked: Oe,
      drawSubtracted: qe,
      pushTransform: X,
      popTransform: he,
      pushTranslate: re,
      pushScale: Ne,
      pushRotate: je,
      pushMatrix: xn,
      usePostEffect: vn,
      makeCanvas: wn,
      debug: se,
      scene: qs,
      go: $s,
      onSceneLeave: zs,
      addLevel: Ws,
      getData: Ks,
      setData: ir,
      download: Wt,
      downloadJSON: Rr,
      downloadText: Nn,
      downloadBlob: jn,
      plug: or,
      ASCII_CHARS: Hr,
      canvas: v.canvas(),
      addKaboom: ii,
      LEFT: y.LEFT,
      RIGHT: y.RIGHT,
      UP: y.UP,
      DOWN: y.DOWN,
      RED: Y.RED,
      GREEN: Y.GREEN,
      BLUE: Y.BLUE,
      YELLOW: Y.YELLOW,
      MAGENTA: Y.MAGENTA,
      CYAN: Y.CYAN,
      WHITE: Y.WHITE,
      BLACK: Y.BLACK,
      quit: pi,
      Event: be,
      EventHandler: _e,
      EventController: Ve,
    };
    if ((n.plugins && n.plugins.forEach(or), n.global !== !1))
      for (let t in Ze) window[t] = Ze[t];
    return n.focus !== !1 && v.canvas().focus(), Ze;
  }, "default");
  return Ui(so);
})();
window.kaboom = kaboom.default;
//# sourceMappingURL=kaboom.js.map
