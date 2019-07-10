#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

vec3 hueGradient(float t) {
	vec3 p = abs(fract(t + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
	return (clamp(p - 1.0, 0.0, 1.0));
}

bool circle(vec2 center, float radius, float width) {
	float d = distance(gl_FragCoord.xy, center);
	return (d > radius - width && d < radius);
}

void main(void) {
	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
	for (int i=1; i<120; i++) {
		vec2 c = u_resolution/2.0 + vec2(sin(u_time + float(i)), cos(u_time + float(i)))*5.0;
		if (circle(c, float(i)*10.0 + sin(float(i)*u_time/25.0)*8.0, 3.0)) {
			gl_FragColor = vec4(hueGradient(float(i)/100.0+u_time/15.0), 1.0);
		}
	}
}

