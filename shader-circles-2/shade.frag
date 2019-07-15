#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 hueGradient(float t) {
	vec3 p = abs(fract(t + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
	return (clamp(p - 1.0, 0.0, 1.0));
}

void main(void) {
	vec2 st = (gl_FragCoord.xy - (u_resolution / 2.0)) / min(u_resolution.y, u_resolution.x);
	float r = sqrt(pow(st.x,2.0) + pow(st.y,2.0));
	float theta = atan(st.x, st.y);

	float pt = r + sin(theta*40.0)/80.0;
	float by = 0.06+(abs(cos(u_time/4.5)+sin(u_time/2.0))/10.0);
	float ck = mod(pt, by);

	if (ck < abs(sin(cos(r)*u_time))/20.0 && pt > 0.1) {
		gl_FragColor = vec4(hueGradient(r+u_time/10.0), 1.0);
	} else {
		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
	}
}
